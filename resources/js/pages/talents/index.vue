<template>
    <div>
        <page-heading title="talents" />
        <div v-if="TALENTS.data && !loading">
            <div class="row mb-2">
                <div class="col-12 d-flex justify-content-between">
                    <div class="dropdown">
                        <button
                            class="btn btn-info text-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownSort"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Sort By
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownSort"
                        >
                            <li
                                v-for="(item, index) in sortBySelection"
                                :key="index"
                            >
                                <a
                                    class="dropdown-item"
                                    :class="{
                                        active: currentSort(item.name, item.dir)
                                    }"
                                    href="javascript:void(0)"
                                    @click="sortTalents(item.name, item.dir)"
                                    >{{ item.name }} - {{ item.dir }}</a
                                >
                            </li>
                        </ul>
                    </div>
                    <router-link
                        :to="{ name: 'talents-create' }"
                        type="button"
                        class="btn btn-primary btn-sm btn-rounded"
                        ><i class="ri-user-add-line me-2"></i>Create
                        Talent</router-link
                    >
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">University</th>
                            <th scope="col">Created By</th>
                            <th scope="col">Created At</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in TALENTS.data" :key="item.id">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.applied_position }}</td>
                            <td>
                                {{ item.university }}
                            </td>
                            <td>{{ item.pic.name }}</td>
                            <td>
                                {{
                                    item.dates.created_at
                                        | moment("dddd, DD/MM/YYYY")
                                }}
                            </td>
                            <td>
                                <div class="d-flex justify-content-end">
                                    <router-link
                                        :to="{
                                            name: 'talents-show',
                                            params: { id: item.id }
                                        }"
                                        type="button"
                                        class="btn btn-info text-white btn-sm px-3 mx-2 d-flex align-items-center"
                                    >
                                        <i class="ri-eye-line me-2"></i>
                                        <span>Details</span>
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="7">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p>
                                            Page
                                            {{ TALENTS.meta.current_page }} of
                                            {{ TALENTS.meta.last_page }}
                                        </p>
                                    </div>
                                    <nav aria-label="pagination">
                                        <ul
                                            class="pagination justify-content-end mb-0"
                                        >
                                            <li
                                                class="page-item"
                                                :class="{
                                                    disabled:
                                                        !TALENTS.links.prev &&
                                                        !loading
                                                }"
                                                :disabled="loading"
                                                @click="changePage('prev')"
                                            >
                                                <a
                                                    class="page-link"
                                                    href="#"
                                                    tabindex="-1"
                                                    >Previous</a
                                                >
                                            </li>
                                            <li class="page-item active">
                                                <a
                                                    class="page-link pe-none"
                                                    href="javascript:void(0)"
                                                    >{{
                                                        TALENTS.meta
                                                            .current_page
                                                    }}</a
                                                >
                                            </li>
                                            <li
                                                class="page-item"
                                                :class="{
                                                    disabled:
                                                        !TALENTS.links.next &&
                                                        !loading
                                                }"
                                                :disabled="loading"
                                                @click="changePage('next')"
                                            >
                                                <a
                                                    class="page-link"
                                                    href="javascript:void(0)"
                                                    >Next</a
                                                >
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <loading />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeading from "../../components/Core/PageHeading.vue";
import Loading from "../../components/Core/Loading.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "TalentsPage",
    components: { PageHeading, Loading },
    async mounted() {
        await this.getTalents();

        this.parameters.page = this.TALENTS.meta.current_page;
    },
    data() {
        return {
            loading: false,
            error: true,
            parameters: {
                page: 1,
                sortBy: "created_at",
                sortDir: "desc"
            },
            sortBySelection: [
                { name: "name", dir: "asc" },
                { name: "name", dir: "desc" },
                { name: "applied_position", dir: "asc" },
                { name: "applied_position", dir: "desc" },
                { name: "university", dir: "asc" },
                { name: "university", dir: "desc" },
                { name: "created_at", dir: "asc" },
                { name: "created_at", dir: "desc" }
            ]
        };
    },
    computed: {
        ...mapGetters({
            TALENTS: "talent/TALENTS"
        })
    },
    methods: {
        ...mapActions({
            GET_TALENTS: "talent/GET_TALENTS"
        }),
        async changePage(direction) {
            this.parameters.page = this.TALENTS.meta.current_page;

            if (direction == "next") {
                if (this.TALENTS.links.next) {
                    this.parameters.page += 1;
                    this.getTalents();
                }
            } else {
                if (this.TALENTS.links.prev) {
                    this.parameters.page -= 1;
                    this.getTalents();
                }
            }
        },
        async getTalents() {
            this.loading = true;
            this.$toast.info("Loading...");
            try {
                await this.GET_TALENTS({
                    page: this.parameters.page,
                    sort: this.parameters.sortBy,
                    sortDir: this.parameters.sortDir
                });
                this.$toast.success("Data updated");
            } catch (err) {
                this.$toast.error("Fail to fetched...");
            } finally {
                this.loading = false;
            }
        },
        sortTalents(name, dir) {
            this.parameters.sortBy = name;
            this.parameters.sortDir = dir;
            this.parameters.page = 1;
            this.getTalents();
        },
        currentSort(name, dir) {
            return (
                name == this.parameters.sortBy && dir == this.parameters.sortDir
            );
        }
    }
};
</script>

<style>
.disabled {
    pointer-events: none;
}
</style>
