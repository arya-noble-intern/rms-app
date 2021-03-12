<template>
    <div>
        <page-heading title="Employee Request Forms" />
        <div class="row mt-4 px-xl-5">
            <div
                v-for="item in ERFS.data"
                :key="item.id"
                class="col-12 col-lg-6"
            >
                <div class="card shadow-2-strong rounded mb-3">
                    <div class="row g-0">
                        <div
                            class="col-md-3 mt-4 mt-md-0 d-flex align-items-center justify-content-center"
                        >
                            <p
                                v-if="item.approval.approval_by_pic === null"
                                class="badge bg-warning my-0"
                            >
                                Needs Approval
                            </p>
                            <p
                                v-else-if="item.approval.approval_by_pic === 0"
                                class="badge bg-danger my-0"
                            >
                                Rejected
                            </p>
                            <p v-else class="badge bg-success my-0">
                                All Approved
                            </p>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5
                                    class="card-title w-100 text-nowrap text-truncate"
                                >
                                    {{ item.title }}
                                </h5>
                                <p class="text-muted mb-2">
                                    Approved by LHC -
                                    {{
                                        item.approval.created_at
                                            | moment("DD/MMMM/YYYY")
                                    }}
                                </p>
                                <p class="text-muted">
                                    {{ getBadge(item) }}
                                </p>
                            </div>
                            <div
                                class="card-footer d-flex align-items-center justify-content-end"
                            >
                                <button class="btn btn-secondary" type="button">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PageHeading from "../../components/Core/PageHeading";
import Loading from "../../components/Core/Loading";

export default {
    name: "EmployeeRequestFormIndex",
    components: {
        PageHeading,
        Loading
    },
    data() {
        return {
            loading: false
        };
    },
    async mounted() {
        await this.getErfs();
    },
    computed: {
        ...mapGetters({
            ERFS: "employeeRequestForm/ERFS"
        })
    },
    methods: {
        ...mapActions({
            GET_ERFS: "employeeRequestForm/GET_ERFS"
        }),
        async getErfs() {
            this.loading = true;

            try {
                await this.GET_ERFS();
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
            }
        },
        getBadge(item) {
            let res = "";
            switch (item.approval.approval_by_pic) {
                case null:
                    res = "Waiting PIC Approval";
                    break;
                case 0:
                    res = `Rejected by ${item.approval.pic.name}`;
                    break;
                case 1:
                    res = `Approved by PIC
                                     ${item.approval.pic.name} -
                                    ${this.$moment(
                                        item.approval.updated_at,
                                        "DD/MMMM/YYYY"
                                    )}`;
                    break;
            }

            return res;
        }
    }
};
</script>

<style></style>
