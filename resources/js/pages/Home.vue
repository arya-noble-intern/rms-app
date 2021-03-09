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
                                <i
                                    class="ri-folder-received-fill ri-2x me-3"
                                ></i>
                                <div class="lh-1">
                                    <h1 class="h6 mb-0 text-white lh-1">
                                        OVERVIEW
                                    </h1>
                                    <small>Employee Request Forms</small>
                                </div>
                            </div>
                            <div
                                v-if="ERFS.data"
                                class="my-3 p-3 bg-white rounded shadow-1-strong"
                            >
                                <h6 class="border-bottom pb-2 mb-0">
                                    Recent updates
                                </h6>
                                <template>
                                    <div
                                        v-for="item in ERFS.data.slice(0, 3)"
                                        :key="item.id"
                                        class="d-flex text-muted pt-3"
                                    >
                                        <i
                                            class="ri-arrow-right-s-fill ri-2x bd-placeholder-img flex-shrink-0 me-2"
                                        ></i>
                                        <p
                                            class="pb-3 mb-0 small lh-sm border-bottom"
                                        >
                                            <strong
                                                class="d-block text-gray-dark"
                                                >{{ item.leader.name }}</strong
                                            >
                                            {{ item.title }} <br />
                                            <small>{{
                                                item.dates.created_at_diff
                                            }}</small>
                                        </p>
                                    </div>
                                </template>
                                <small class="d-block text-end mt-3">
                                    <a href="#">View all</a>
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
            ME: "user/ME",
            ERFS: "employeeRequestForm/ERFS"
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
