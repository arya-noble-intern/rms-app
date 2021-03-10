<template>
    <div>
        <page-heading title="talents" />
        <div v-if="TALENTS.data">
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">University</th>
                            <th scope="col">Created By</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(item, index) in TALENTS.data"
                            :key="item.id"
                        >
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.applied_position }}</td>
                            <td>
                                {{ item.university }}
                            </td>
                            <td>{{ item.pic.name }}</td>
                            <td>
                                <div class="d-flex justify-content-around">
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-sm px-3 d-flex align-items-center"
                                    >
                                        <i class="ri-eye-line me-2"></i>
                                        <span>Details</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger btn-sm px-3"
                                    >
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6">
                                <nav aria-label="pagination" class="w-100">
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
                                            @click="changePage('prev')"
                                        >
                                            <a
                                                class="page-link"
                                                href="#"
                                                tabindex="-1"
                                                aria-disabled="true"
                                                >Previous</a
                                            >
                                        </li>
                                        <li class="page-item active">
                                            <a
                                                class="page-link pe-none"
                                                href="javascript:void(0)"
                                                >{{
                                                    TALENTS.meta.current_page
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
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeading from "../../components/Core/PageHeading.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "TalentsPage",
    components: { PageHeading },
    mounted() {
        if (!Object.keys(this.TALENTS).length) {
            this.GET_TALENTS();
        }
    },
    data() {
        return {
            loading: false,
            error: true
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
            this.loading = true;
            let page = parseInt(this.TALENTS.meta.current_page);
            try {
                if (direction == "next") {
                    if (this.TALENTS.links.next) {
                        await this.GET_TALENTS(page + 1);
                        this.$toast.success("Data updated");
                    }
                } else {
                    if (this.TALENTS.links.prev) {
                        await this.GET_TALENTS(page - 1);
                        this.$toast.success("Data updated");
                    }
                }
            } catch (err) {
                this.error = true;
                this.$toast.error("Fail to fetch data");
            } finally {
                this.loading = false;
                this.error = false;
            }
        }
    }
};
</script>

<style></style>
