<template>
    <section>
        <div class="row">
            <div class="col-xl-4 col-sm-4 col-12 mb-4">
                <div class="card shadow-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i
                                    class="ri-file-paper-line text-primary ri-3x"
                                ></i>
                            </div>
                            <div class="text-end">
                                <h3 v-if="ERFS.meta">
                                    {{ ERFS.meta.total }}
                                </h3>
                                <p class="mb-0">
                                    Employee Requests
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 col-12 mb-4">
                <div class="card shadow-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i
                                    class="ri-bookmark-3-line text-success ri-3x"
                                ></i>
                            </div>
                            <div class="text-end">
                                <h3 v-if="CANDIDATE_CARDS.meta">
                                    {{ CANDIDATE_CARDS.meta.total }}
                                </h3>
                                <div
                                    v-else
                                    class="spinner-border text-primary"
                                    role="status"
                                >
                                    <span class="visually-hidden"
                                        >Loading...</span
                                    >
                                </div>
                                <p class="mb-0">Candidate Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-12 col-12 mb-4">
                <div class="card shadow-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i class="ri-group-line text-primary fa-3x"></i>
                            </div>
                            <div class="text-end">
                                <h3 v-if="ME.data.role" class="text-uppercase">
                                    {{ ME.data.role.name }}
                                </h3>
                                <div
                                    v-else
                                    class="spinner-border text-primary"
                                    role="status"
                                >
                                    <span class="visually-hidden"
                                        >Loading...</span
                                    >
                                </div>
                                <p class="mb-0">Your Group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "LeaderCards",
    computed: {
        ...mapGetters({
            ERFS: "employeeRequestForm/ERFS",
            CANDIDATE_CARDS: "candidateCard/CANDIDATE_CARDS",
            ME: "user/ME"
        })
    }
};
</script>

<style></style>
