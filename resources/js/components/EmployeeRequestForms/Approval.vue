<template>
    <div>
        <div class="row">
            <div class="col-4">
                <approval />
            </div>
            <div class="col-8">
                <div v-if="!loading">
                    <div class="row">
                        <div class="col-12 text-start">
                            <h5 class="mb-2">
                                <span class="badge badge-lg bg-success">
                                    Approved by LHC
                                </span>
                            </h5>
                        </div>
                        <div class="col-12 mt-2">
                            <div class="form-outline mb-4">
                                <textarea
                                    :value="getApproval.notes_by_lhc"
                                    class="form-control"
                                    id="notes_by_lhc"
                                    rows="4"
                                    disabled
                                ></textarea>
                                <label class="form-label" for="notes_by_lhc"
                                    >Notes by LHC</label
                                >
                            </div>
                        </div>
                        <form
                            v-if="getApproval.approval_by_pic == null"
                            class="w-100"
                            @submit.prevent="updateRequestApproval"
                        >
                            <div class="col-12 mb-2 text-start">
                                <div class="form-check form-check-inline ms-2">
                                    <input
                                        v-model="approval.approval_by_pic"
                                        class="form-check-input"
                                        type="radio"
                                        name="approval_by_pic"
                                        id="pic_approve"
                                        value="1"
                                        required
                                    />
                                    <label
                                        class="form-check-label"
                                        for="pic_approve"
                                        >PIC Approve</label
                                    >
                                </div>

                                <div class="form-check form-check-inline">
                                    <input
                                        v-model="approval.approval_by_pic"
                                        class="form-check-input"
                                        type="radio"
                                        name="approval_by_pic"
                                        id="pic_reject"
                                        value="0"
                                        required
                                    />
                                    <label
                                        class="form-check-label"
                                        for="pic_reject"
                                        >PIC Reject</label
                                    >
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-outline mb-4">
                                    <textarea
                                        v-model="approval.notes_by_pic"
                                        class="form-control"
                                        id="notes_by_pic"
                                        rows="4"
                                        required
                                    ></textarea>
                                    <label class="form-label" for="notes_by_pic"
                                        >Notes by PIC</label
                                    >
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-secondary btn-block mb-4"
                                >
                                    Submit Approval
                                </button>
                            </div>
                        </form>
                        <div v-else>
                            <div class="col-12 mb-2 text-start">
                                <h5 class="mb-2">
                                    <span
                                        class="badge badge-lg"
                                        :class="{
                                            'bg-danger':
                                                getApproval.approval_by_pic ==
                                                0,
                                            'bg-success':
                                                getApproval.approval_by_pic == 1
                                        }"
                                    >
                                        <template
                                            v-if="
                                                getApproval.approval_by_pic == 1
                                            "
                                        >
                                            Approved by PIC
                                        </template>
                                        <template v-else
                                            >Rejected by PIC</template
                                        >
                                    </span>
                                </h5>
                            </div>
                            <div class="col-12 mt-3">
                                <div class="form-outline mb-4">
                                    <textarea
                                        :value="getApproval.notes_by_pic"
                                        class="form-control"
                                        id="notes_by_pic"
                                        rows="4"
                                        disabled
                                    ></textarea>
                                    <label class="form-label" for="notes_by_pic"
                                        >Notes by PIC</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <loading />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Approval from "../../assets/svg/Approval";
import Loading from "../Core/Loading";
import { Input } from "mdb-ui-kit";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name: "ApprovalERF",
    mounted() {
        this.initInput();
    },
    data() {
        return {
            approval: {
                approval_by_pic: null,
                notes_by_pic: null
            },
            loading: false
        };
    },
    components: {
        Approval,
        Loading
    },
    computed: {
        ...mapGetters({
            ERF: "employeeRequestForm/ERF"
        }),
        getApproval() {
            if (Object.keys(this.ERF).length > 0) {
                return this.ERF.data.approval;
            }

            return {};
        }
    },
    methods: {
        ...mapMutations({
            SET_ERF_APPROVAL: "employeeRequestForm/SET_ERF_APPROVAL"
        }),
        ...mapActions({
            UPDATE_APPROVAL: "requestApproval/UPDATE_APPROVAL",
            UPDATE_ERF_APPROVAL: "employeeRequestForm/UPDATE_ERF_APPROVAL"
        }),
        initInput() {
            document.querySelectorAll(".form-outline").forEach(formOutline => {
                new Input(formOutline).init();
            });
        },
        async updateRequestApproval() {
            this.loading = true;
            const approvalId = this.ERF.data.approval.id;
            try {
                await this.UPDATE_APPROVAL({
                    id: approvalId,
                    payload: this.approval
                });
                await this.UPDATE_ERF_APPROVAL(this.approval);
                this.$toast.success("Approval saved");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
                await this.$delay(1000);
                this.initInput();
            }
        }
    }
};
</script>

<style></style>
