<template>
    <div>
        <div class="row">
            <div
                class="col-12 d-flex align-items-center justify-content-between"
            >
                <page-heading title="Employee Request Form Details" />
                <loading v-if="loading" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 col-xl-8">
                <div class="card text-center shadow-4-strong">
                    <div
                        class="card-header d-flex justify-content-between align-items-center"
                    >
                        <ul class="nav nav-pills card-header-tabs">
                            <li class="nav-item">
                                <router-link
                                    :to="{
                                        name: 'employee-request-forms-show'
                                    }"
                                    exact-active-class="active"
                                    class="nav-link"
                                    href="javascript:void(0)"
                                    >Form Details</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    :to="{
                                        name: 'employee-request-forms-requester'
                                    }"
                                    exact-active-class="active"
                                    class="nav-link"
                                    href="javascript:void(0)"
                                    >Requester Details</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    :to="{
                                        name: 'employee-request-forms-approval'
                                    }"
                                    exact-active-class="active"
                                    class="nav-link"
                                    href="javascript:void(0)"
                                    >Approvals</router-link
                                >
                            </li>
                        </ul>
                        <div>
                            <button
                                v-if="item"
                                type="button"
                                class="btn btn-sm btn-rounded text-white"
                                :class="
                                    getStatusBadge(
                                        item.approval.approval_by_pic
                                    )
                                "
                                disabled
                            >
                                {{
                                    getStatusText(item.approval.approval_by_pic)
                                }}
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div v-if="ERF.data">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-4 mt-4 mt-xl-0">
                <div class="row">
                    <div class="col">
                        <div class="d-grid">
                            <button
                                class="btn btn-primary"
                                :class="{ disabled: !allApproved || loading }"
                                type="button"
                                @click="makeCandidateCard()"
                                :disabled="!allApproved || loading"
                            >
                                Make Candidate Card
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card text-center shadow-4-strong mt-2">
                    <div class="card-header py-4">
                        <h4 class="mb-0">
                            Associated Candidate Cards
                            <span class="badge bg-secondary ms-2">{{
                                candidateCardCount
                            }}</span>
                        </h4>
                    </div>
                    <div v-if="ERF.data" class="card-body">
                        <div class="list-group shadow-2 w-75  mx-auto">
                            <a
                                v-for="card in ERF.data.candidate_cards"
                                :key="card.id"
                                href="javascript:void(0)"
                                class="list-group-item list-group-item-action"
                                aria-current="true"
                            >
                                <div
                                    class="d-flex w-100 justify-content-between"
                                >
                                    <div>
                                        <small>{{ card.created_at }}</small>
                                    </div>
                                    <div>
                                        <p class="mb-0">
                                            {{ card.status }}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "../../../components/Core/Loading";
import PageHeading from "../../../components/Core/PageHeading";

export default {
    name: "EmployeeRequestFormShow",
    components: {
        Loading,
        PageHeading
    },
    data() {
        return {
            id: this.$route.params.id,
            loading: false
        };
    },
    async created() {
        await this.getErf();
    },
    computed: {
        ...mapGetters({
            ERF: "employeeRequestForm/ERF",
            CANDIDATE_CARD: "candidateCard/CANDIDATE_CARD"
        }),
        candidateCardCount() {
            if (Object.keys(this.ERF).length > 0) {
                return this.ERF.data.candidate_cards_count ?? 0;
            }

            return 0;
        },
        item() {
            if (Object.keys(this.ERF).length) {
                return this.ERF.data;
            }

            return null;
        },
        allApproved() {
            if (this.item) {
                return (
                    this.item.approval.approval_by_pic == 1 &&
                    this.item.approval.approval_by_lhc == 1
                );
            }
            return false;
        }
    },
    methods: {
        ...mapActions({
            GET_ERF: "employeeRequestForm/GET_ERF",
            CREATE_CANDIDATE_CARD: "candidateCard/CREATE_CANDIDATE_CARD"
        }),
        async getErf() {
            this.loading = true;
            this.$toast.info("Loading...");

            try {
                await this.GET_ERF(this.id);
                this.$toast.success("Data loaded...");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
            }
        },
        async makeCandidateCard() {
            this.loading = true;
            try {
                const payload = {
                    employee_request_form_id: this.$route.params.id
                };
                await this.CREATE_CANDIDATE_CARD(payload);
                this.$toast.success("Candidate card created");
                this.$toast.info("Redirecting you in 3 seconds..");
                await this.$delay(3000);
                this.$router.push({
                    name: "candidate-cards-show",
                    params: { id: this.CANDIDATE_CARD.id }
                });
            } catch (err) {
                this.$toast.error(`Error! ${err.response.statusText}`);
            } finally {
                this.loading = false;
            }
        },
        getStatusBadge(approval) {
            let color = "";
            switch (approval) {
                case null:
                    color = "info";
                    break;
                case 0:
                    color = "danger";
                    break;
                default:
                    color = "success";
                    break;
            }

            return `bg-${color}`;
        },
        getStatusText(approval) {
            let text = "";
            switch (approval) {
                case null:
                    text = "Needs Approval";
                    break;
                case 0:
                    text = "Rejected";
                    break;
                default:
                    text = "All Approved";
                    break;
            }

            return text;
        }
    }
};
</script>

<style></style>
