<template>
    <div>
        <div class="row">
            <div
                class="col-12 d-flex align-items-center justify-content-between"
            >
                <page-heading title="Candidate Cards" />
                <loading v-if="loading" />
            </div>
        </div>
        <div class="row">
            <div
                class="col-12 d-flex align-items-center justify-content-between"
            >
                <div class="d-flex">
                    <div class="dropdown me-2">
                        <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            id="sortDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {{ selectedSort | capitalize }}
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="sortDropdown"
                        >
                            <li
                                v-for="(value, name, index) in sortList"
                                :key="index"
                            >
                                <a
                                    class="dropdown-item"
                                    :class="{ active: name == selectedSort }"
                                    href="javascript:void(0)"
                                    @click="changeSort(`${name}`)"
                                    >{{ name | capitalize }}</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Filter Status
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <a
                                    class="dropdown-item"
                                    :class="{ active: selectedStatus == 0 }"
                                    href="javascript:void(0)"
                                    @click="changeStatus(0)"
                                    >All Status</a
                                >
                            </li>
                            <li
                                v-for="(item, index) in sortedStatus"
                                :key="index"
                            >
                                <a
                                    class="dropdown-item"
                                    :class="{
                                        active: selectedStatus == item.order
                                    }"
                                    href="javascript:void(0)"
                                    @click="changeStatus(item.order)"
                                    >{{ item.order }} -
                                    {{ item.description }}</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div
                v-for="(item, index) in CANDIDATE_CARDS.data"
                :key="index"
                class="col-4"
            >
                <div class="card shadow-2-strong mb-3">
                    <div class="card-body p-3">
                        <h5 class="card-title">
                            <span class="badge bg-info">{{
                                item.status.description
                            }}</span>
                        </h5>
                        <p class="card-text">
                            {{ item.employee_request_form.title }}
                        </p>
                        <button type="button" class="btn btn-primary float-end">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="CANDIDATE_CARDS.data" class="row mt-4">
            <div class="col">
                <div class="d-flex justify-content-between">
                    <div>
                        <p>
                            Page
                            {{ CANDIDATE_CARDS.meta.current_page }} of
                            {{ CANDIDATE_CARDS.meta.last_page }}
                        </p>
                    </div>
                    <nav aria-label="pagination">
                        <ul class="pagination justify-content-end mb-0">
                            <li
                                class="page-item"
                                :class="{
                                    disabled:
                                        !CANDIDATE_CARDS.links.prev || loading
                                }"
                                :disabled="loading"
                                @click="changePage('prev')"
                            >
                                <a
                                    class="page-link"
                                    href="javascript:void(0)"
                                    tabindex="-1"
                                    >Previous</a
                                >
                            </li>
                            <li class="page-item active">
                                <a
                                    class="page-link pe-none"
                                    href="javascript:void(0)"
                                    >{{ CANDIDATE_CARDS.meta.current_page }}</a
                                >
                            </li>
                            <li
                                class="page-item"
                                :class="{
                                    disabled:
                                        !CANDIDATE_CARDS.links.next || loading
                                }"
                                :disabled="loading"
                                @click="changePage('next')"
                            >
                                <a class="page-link" href="javascript:void(0)"
                                    >Next</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeading from "../../components/Core/PageHeading.vue";
import Loading from "../../components/Core/Loading.vue";
import FilterSvg from "../../assets/svg/Filter";
import { mapActions, mapGetters } from "vuex";
import { Input } from "mdb-ui-kit";

export default {
    name: "CandidateCardsIndex",
    components: {
        PageHeading,
        Loading,
        FilterSvg,
        Input
    },
    data() {
        return {
            loading: false,
            page: 1,
            selectedSort: "latest",
            sortList: {
                latest: {
                    created_at: "desc"
                },
                oldest: {
                    created_at: "asc"
                },
                early_process: {
                    status_order: "asc"
                },
                further_process: {
                    status_order: "desc"
                }
            },
            selectedStatus: 0,
            timer: null
        };
    },
    async mounted() {
        await this.getCandidateCards();
        await this.GET_CARD_STATUSES();
        this.initInput();
    },
    filters: {
        capitalize: value => {
            if (!value) return "";
            return value
                .split("_")
                .map(x => {
                    return x[0].toUpperCase() + x.slice(1);
                })
                .join(" ");
        }
    },
    computed: {
        ...mapGetters({
            CANDIDATE_CARDS: "candidateCard/CANDIDATE_CARDS",
            CARD_STATUSES: "cardStatus/CARD_STATUSES"
        }),
        sortedStatus() {
            if (this.CARD_STATUSES) {
                let statuses = this.CARD_STATUSES;
                for (let i = 0; i < statuses; i++) {
                    statuses[i].sort((a, b) => {
                        return a.order - b.order;
                    });
                }
                return statuses;
            }

            return [];
        }
    },
    methods: {
        ...mapActions({
            GET_CANDIDATE_CARDS: "candidateCard/GET_CANDIDATE_CARDS",
            GET_CARD_STATUSES: "cardStatus/GET_CARD_STATUSES"
        }),
        initInput() {
            document.querySelectorAll(".form-outline").forEach(formOutline => {
                new Input(formOutline).init();
            });
        },
        async getCandidateCards() {
            this.loading = true;
            try {
                await this.GET_CANDIDATE_CARDS({ page: this.page });
                this.$toast.success("Data loaded");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
            }
        },
        changeSort(name) {
            this.selectedSort = name;
        },
        changeStatus(order) {
            this.selectedStatus = parseInt(order);
        },
        changePage(direction) {
            this.page = this.CANDIDATE_CARDS.meta.current_page;

            if (direction == "next") {
                if (this.CANDIDATE_CARDS.links.next) {
                    this.page += 1;
                    // this.getErfs();
                    this.$scrollTo("#app", { duration: 200 });
                }
            } else {
                if (this.CANDIDATE_CARDS.links.prev) {
                    this.page -= 1;
                    // this.getErfs();
                    this.$scrollTo("#app", { duration: 200 });
                }
            }
        }
    }
};
</script>

<style></style>
