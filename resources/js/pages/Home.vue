<template>
    <div class="pb-5">
        <h1 class="h3 text-uppercase mb-4">Home</h1>
        <div v-if="ME.data">
            <div v-if="roleName == $getConst('PIC')">
                <pic-cards />
                <hr />
                <section>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div
                                class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded-2 shadow-2-strong"
                            >
                                <img
                                    class="me-3"
                                    src="/docs/5.0/assets/brand/bootstrap-logo-white.svg"
                                    alt=""
                                    width="48"
                                    height="38"
                                />
                                <div class="lh-1">
                                    <h1 class="h6 mb-0 text-white lh-1">
                                        Bootstrap
                                    </h1>
                                    <small>Since 2011</small>
                                </div>
                            </div>
                            <div
                                class="my-3 p-3 bg-white rounded shadow-1-strong"
                            >
                                <h6 class="border-bottom pb-2 mb-0">
                                    Recent updates
                                </h6>
                                <div class="d-flex text-muted pt-3">
                                    <svg
                                        class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                                        width="32"
                                        height="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Placeholder: 32x32"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#007bff"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#007bff"
                                            dy=".3em"
                                        >
                                            32x32
                                        </text>
                                    </svg>

                                    <p
                                        class="pb-3 mb-0 small lh-sm border-bottom"
                                    >
                                        <strong class="d-block text-gray-dark"
                                            >@username</strong
                                        >
                                        Some representative placeholder content,
                                        with some information about this user.
                                        Imagine this being some sort of status
                                        update, perhaps?
                                    </p>
                                </div>
                                <div class="d-flex text-muted pt-3">
                                    <svg
                                        class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                                        width="32"
                                        height="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Placeholder: 32x32"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#e83e8c"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#e83e8c"
                                            dy=".3em"
                                        >
                                            32x32
                                        </text>
                                    </svg>

                                    <p
                                        class="pb-3 mb-0 small lh-sm border-bottom"
                                    >
                                        <strong class="d-block text-gray-dark"
                                            >@username</strong
                                        >
                                        Some more representative placeholder
                                        content, related to this other user.
                                        Another status update, perhaps.
                                    </p>
                                </div>
                                <div class="d-flex text-muted pt-3">
                                    <svg
                                        class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                                        width="32"
                                        height="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Placeholder: 32x32"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                    >
                                        <title>Placeholder</title>
                                        <rect
                                            width="100%"
                                            height="100%"
                                            fill="#6f42c1"
                                        />
                                        <text
                                            x="50%"
                                            y="50%"
                                            fill="#6f42c1"
                                            dy=".3em"
                                        >
                                            32x32
                                        </text>
                                    </svg>

                                    <p
                                        class="pb-3 mb-0 small lh-sm border-bottom"
                                    >
                                        <strong class="d-block text-gray-dark"
                                            >@username</strong
                                        >
                                        This user also gets some representative
                                        placeholder content. Maybe they did
                                        something interesting, and you really
                                        want to highlight this in the recent
                                        updates.
                                    </p>
                                </div>
                                <small class="d-block text-end mt-3">
                                    <a href="#">All updates</a>
                                </small>
                            </div>
                        </div>
                        <div class="col-12 col-md-6"></div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import PicCards from "../components/Home/PicCards.vue";
export default {
    name: "home",
    components: {
        PicCards
    },
    mounted() {
        this.GET_ERFS();
        this.GET_CANDIDATE_CARDS();
        this.GET_TALENTS();

        if (!Object.keys(this.ME).length) {
            this.GET_ME();
        }
    },
    computed: {
        ...mapGetters({
            ME: "user/ME"
        }),
        roleName() {
            if (Object.keys(this.ME).length) {
                return this.ME.data.role.name;
            }
            return "";
        }
    },
    methods: {
        ...mapActions({
            GET_ERFS: "employeeRequestForm/GET_ERFS",
            GET_CANDIDATE_CARDS: "candidateCard/GET_CANDIDATE_CARDS",
            GET_TALENTS: "talent/GET_TALENTS",
            GET_ME: "user/GET_ME"
        })
    }
};
</script>

<style></style>
