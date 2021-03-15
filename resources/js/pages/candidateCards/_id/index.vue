<template>
    <div>
        <div class="row">
            <div
                class="col-12 d-flex align-items-center justify-content-between"
            >
                <page-heading title="Candidate Card Details" />
                <loading v-if="loading" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card text-center shadow-2-strong">
                    <div
                        class="card-header d-flex justify-content-between align-items-center"
                    >
                        <ul class="nav nav-pills card-header-tabs">
                            <li class="nav-item">
                                <router-link
                                    :to="{
                                        name: 'candidate-cards-show'
                                    }"
                                    exact-active-class="active"
                                    class="nav-link"
                                    href="javascript:void(0)"
                                    >Card Details</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)"
                                    >Discussion</a
                                >
                            </li>
                        </ul>
                        <h5>
                            <span class="badge bg-info"
                                >{{ status.order }} -
                                {{ status.description }}</span
                            >
                        </h5>
                    </div>
                    <div class="card-body">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeading from "../../../components/Core/PageHeading.vue";
import Loading from "../../../components/Core/Loading.vue";
import { mapActions, mapGetters } from "vuex";
// import { Input } from "mdb-ui-kit";

export default {
    name: "CandidateCardShow",
    components: {
        PageHeading,
        Loading
    },
    async mounted() {
        await this.GET_CANDIDATE_CARD(this.$route.params.id);
        this.$toast.success("Data loaded");
    },
    data() {
        return {
            loading: false
        };
    },
    computed: {
        ...mapGetters({
            CANDIDATE_CARD: "candidateCard/CANDIDATE_CARD"
        }),
        status() {
            if (this.CANDIDATE_CARD.data) {
                return this.CANDIDATE_CARD.data.status;
            }

            return {};
        }
    },
    methods: {
        ...mapActions({
            GET_CANDIDATE_CARD: "candidateCard/GET_CANDIDATE_CARD"
        })
    }
};
</script>

<style></style>
