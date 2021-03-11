<template>
    <section id="overview-erf">
        <div
            class="d-flex align-items-center p-3 my-3 text-white bg-secondary rounded-2 shadow-2-strong"
        >
            <i class="ri-user-received-line ri-2x me-3"></i>
            <div class="lh-1">
                <h1 class="h6 mb-0 text-white lh-1">
                    OVERVIEW
                </h1>
                <small>Talents</small>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded shadow-1-strong">
            <h6 class="border-bottom pb-2 mb-0">
                Recent updates
            </h6>
            <template v-if="TALENTS.data">
                <div
                    v-for="item in TALENTS.data.slice(0, 3)"
                    :key="item.id"
                    class="d-flex text-muted pt-3"
                >
                    <i
                        class="ri-arrow-right-s-fill ri-2x bd-placeholder-img flex-shrink-0 me-2"
                    ></i>
                    <p class="pb-3 mb-0 small lh-sm border-bottom w-100">
                        <strong class="d-block text-gray-dark">{{
                            item.pic.name
                        }}</strong>
                        {{ item.name }} - {{ item.applied_position }}<br />
                        <small>{{ item.dates.created_at_diff }}</small>
                    </p>
                </div>
            </template>
            <template v-else>
                <div class="mt-4" v-for="i in 3" :key="i">
                    <card-table-skeleton />
                </div>
            </template>
            <small
                class="d-block d-flex align-items-center justify-content-end mt-3"
            >
                <router-link :to="{ name: 'talents' }"
                    >Go to Talent Pool
                </router-link>
                <i class="ri-arrow-right-s-line ms-2"></i>
            </small>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import CardTableSkeleton from "../Core/CardTableSkeleton";
export default {
    name: "OverviewTalents",
    components: {
        CardTableSkeleton
    },
    computed: {
        ...mapGetters({
            TALENTS: "talent/TALENTS"
        })
    }
};
</script>

<style></style>
