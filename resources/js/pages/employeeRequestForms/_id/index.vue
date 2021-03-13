<template>
    <div>
        <page-heading title="Employee Request Form Details" />
        <div class="row mt-4">
            <div class="col-12 col-lg-8">
                <div class="card text-center shadow-4-strong">
                    <div class="card-header">
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
                        </ul>
                    </div>
                    <div class="card-body">
                        <router-view />
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card text-center shadow-4-strong">
                    <div class="card-header">
                        <h4 class="mb-0">
                            Associated Candidate Cards
                            <span class="badge bg-secondary">3</span>
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="list-group shadow-2">
                            <a
                                href="#"
                                class="list-group-item list-group-item-action"
                                aria-current="true"
                            >
                                <div
                                    class="d-flex w-100 justify-content-between"
                                >
                                    <h5 class="mb-1">
                                        List group item heading
                                    </h5>
                                    <small>3 days ago</small>
                                </div>
                                <p class="mb-1">
                                    Donec id elit non mi porta gravida at eget
                                    metus. Maecenas sed diam eget risus varius
                                    blandit.
                                </p>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a
                                href="#"
                                class="list-group-item list-group-item-action"
                            >
                                <div
                                    class="d-flex w-100 justify-content-between"
                                >
                                    <h5 class="mb-1">
                                        List group item heading
                                    </h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">
                                    Donec id elit non mi porta gravida at eget
                                    metus. Maecenas sed diam eget risus varius
                                    blandit.
                                </p>
                                <small class="text-muted"
                                    >Donec id elit non mi porta.</small
                                >
                            </a>
                            <a
                                href="#"
                                class="list-group-item list-group-item-action"
                            >
                                <div
                                    class="d-flex w-100 justify-content-between"
                                >
                                    <h5 class="mb-1">
                                        List group item heading
                                    </h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">
                                    Donec id elit non mi porta gravida at eget
                                    metus. Maecenas sed diam eget risus varius
                                    blandit.
                                </p>
                                <small class="text-muted"
                                    >Donec id elit non mi porta.</small
                                >
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
    mounted() {
        this.getErf();
    },
    computed: {
        ...mapGetters({
            ERF: "employeeRequestForm/ERF"
        })
    },
    methods: {
        ...mapActions({
            GET_ERF: "employeeRequestForm/GET_ERF"
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
        }
    }
};
</script>

<style></style>
