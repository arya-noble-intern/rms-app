<template>
    <!-- Modal -->
    <div
        class="modal fade"
        id="modalTalent"
        tabindex="-1"
        aria-labelledby="modalTalentLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTalentLabel">
                        Assign Talent
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div
                                class="alert alert-danger"
                                :class="{ 'd-none': !showAlert }"
                                role="alert"
                            >
                                No talent found from your query
                            </div>
                            <div
                                class="alert alert-danger"
                                :class="{ 'd-none': valid }"
                                role="alert"
                            >
                                Talent is not valid please choose from the
                                dropdown list
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="talentDataList" class="form-label"
                                >Talents (sort by latest)</label
                            >
                            <input
                                v-model="selectedTalent"
                                class="form-control"
                                list="talentListOptions"
                                id="talentDataList"
                                placeholder="Type to search..."
                                autocomplete="off"
                            />
                            <datalist id="talentListOptions">
                                <option
                                    v-for="talent in TALENTS.data"
                                    :key="talent.id"
                                    :value="`${talent.id}-${talent.name}`"
                                >
                                    {{ talent.applied_position }}
                                </option>
                            </datalist>
                        </div>
                    </div>
                </div>
                <div
                    class="modal-footer d-flex justify-content-between align-items-center"
                >
                    <div>
                        <loading v-if="loading" />
                    </div>
                    <div>
                        <button
                            id="closeBtn"
                            type="button"
                            class="btn btn-secondary"
                            data-mdb-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="updateCardTalent"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "../Core/Loading";
export default {
    name: "ModalTalent",
    components: {
        Loading
    },
    mounted() {
        this.GET_TALENTS({});
        this.hiddenListener();
    },
    data() {
        return {
            search: "",
            timer: null,
            selectedTalent: "",
            loading: false,
            valid: true
        };
    },
    computed: {
        ...mapGetters({
            TALENTS: "talent/TALENTS",
            TALENT: "talent/TALENT",
            CANDIDATE_CARD: "candidateCard/CANDIDATE_CARD"
        }),
        showAlert() {
            if (this.TALENTS.data) {
                return this.TALENTS.data.length < 1;
            }
            return true;
        }
    },
    watch: {
        selectedTalent() {
            let el = document.getElementById("modalTalent");
            if (el.style.display !== "none") {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    this.refreshList();
                }, 1000);
            }
        }
    },
    methods: {
        ...mapActions({
            GET_TALENTS: "talent/GET_TALENTS",
            GET_TALENT: "talent/GET_TALENT",
            UPDATE_CANDIDATE_CARD: "candidateCard/UPDATE_CANDIDATE_CARD",
            GET_CANDIDATE_CARD: "candidateCard/GET_CANDIDATE_CARD"
        }),
        async refreshList() {
            this.loading = true;
            if (this.selectedTalent.indexOf("-") > -1) {
                let [id, ...name] = this.selectedTalent.split("-");
                name = name.join("-");
            } else {
                name = this.selectedTalent;
            }

            await this.GET_TALENTS({
                search: name
            });
            this.loading = false;
            this.$toast.info("Talent list refreshed");
        },
        hiddenListener() {
            let myModalEl = document.getElementById("modalTalent");
            myModalEl.addEventListener("hidden.bs.modal", event => {
                this.search = "";
                this.timer = null;
                this.selectedTalent = "";
                this.loading = false;
                this.GET_TALENTS({});
            });
        },
        async updateCardTalent() {
            let [id, ...name] = this.selectedTalent.split("-");
            this.loading = true;
            let payload = {
                talent_id: id,
                proceed: true
            };
            if (this.CANDIDATE_CARD.data.talent_id != null) {
                payload.proceed = false;
            }
            try {
                await this.validTalentCheck();
                await this.UPDATE_CANDIDATE_CARD({
                    id: this.$route.params.id,
                    payload: payload
                });
                this.$toast.success("Card updated");
                document.getElementById("closeBtn").click();
                this.GET_CANDIDATE_CARD(this.$route.params.id);
            } catch (err) {
                if (err.response) {
                    this.$toast.error("Error! " + err.response.statusText);
                } else {
                    console.log(err);
                }
            } finally {
                this.loading = false;
            }
        },
        async validTalentCheck() {
            this.loading = true;
            let [id, ...name] = this.selectedTalent.split("-");
            name = name.join("-");
            try {
                await this.GET_TALENT(id);
                if (
                    this.TALENT.data.id != id ||
                    this.TALENT.data.name != name
                ) {
                    throw "error";
                }
            } catch (err) {
                this.valid = false;
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style></style>
