<template>
    <div class="pb-5">
        <page-heading title="home" />
        <div v-if="ME.data">
            <div v-if="roleName == $getConst('PIC')">
                <pic-cards />
                <hr />
                <div class="row">
                    <div class="col-12 col-md-6">
                        <overview-erfs />
                    </div>
                    <div class="col-12 col-md-6">
                        <overview-talents />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import PicCards from "../components/Home/PicCards.vue";
import OverviewErfs from "../components/Home/OverviewErfs.vue";
import OverviewTalents from "../components/Home/OverviewTalents.vue";
import PageHeading from "../components/Core/PageHeading.vue";

export default {
    name: "home",
    components: {
        PicCards,
        OverviewErfs,
        OverviewTalents,
        PageHeading
    },
    async mounted() {
        if (!Object.keys(this.ME.data).length) {
            await this.GET_ME();
        }

        await this.initData();
    },
    computed: {
        ...mapGetters({
            ME: "user/ME",
            ERFS: "employeeRequestForm/ERFS"
        }),
        roleName() {
            if (Object.keys(this.ME.data).length) {
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
        }),
        async initData() {
            await this.GET_ERFS({});
            await this.GET_CANDIDATE_CARDS({});
            if (this.roleName == this.$getConst("PIC")) {
                await this.GET_TALENTS({});
            }
        }
    }
};
</script>

<style></style>
