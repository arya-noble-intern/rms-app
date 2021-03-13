<template>
    <div>
        <div class="row">
            <div
                class="col-12 d-flex justify-content-between align-items-center"
            >
                <page-heading title="Employee Request Forms" />
                <loading v-if="loading" />
            </div>
        </div>
        <div class="row mt-4">
            <div
                class="col-12 d-flex justify-content-between align-items-center"
            >
                <div>
                    <div class="dropdown">
                        <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownFilter"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {{ filterSelected }}
                        </button>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownFilter"
                        >
                            <li
                                v-for="(filterName, index) in filterOptions"
                                :key="index"
                            >
                                <a
                                    class="dropdown-item"
                                    :class="{
                                        active: filterName == filterSelected
                                    }"
                                    href="javascript:void(0)"
                                    @click="changeFilter(filterName)"
                                    >{{ filterName }}</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="input-group">
                        <div class="form-outline">
                            <input
                                v-model="searchField"
                                type="search"
                                id="searchForm"
                                class="form-control"
                                @keyup="searchForTitle"
                            />
                            <label class="form-label" for="searchForm"
                                >Search ERF Title</label
                            >
                        </div>
                        <button type="button" class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div
                v-for="item in ERFS.data"
                :key="item.id"
                class="col-12 col-lg-4"
            >
                <div class="card shadow-2-strong rounded mb-3 p-2">
                    <div class="row g-0">
                        <div class="col-md-12">
                            <div class="card-body">
                                <h5
                                    class="card-title w-100 text-nowrap text-truncate"
                                >
                                    {{ item.title }}
                                </h5>
                                <p class="text-muted mb-2">
                                    Approved by LHC -
                                    {{
                                        item.approval.created_at
                                            | moment("DD/MMMM/YYYY")
                                    }}
                                </p>
                                <p class="text-muted mb-2">
                                    {{ getTextApproval(item) }}
                                </p>
                                <p class="text-muted mb-0">
                                    Associated candidate cards :
                                    {{ item.candidate_cards_count }}
                                </p>
                            </div>
                            <div
                                class="card-footer d-flex align-items-center justify-content-between py-2"
                            >
                                <div>
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-rounded text-white"
                                        :class="
                                            getStatusBadge(
                                                item.approval.approval_by_pic
                                            )
                                        "
                                        disabled
                                    >
                                        {{
                                            getStatusText(
                                                item.approval.approval_by_pic
                                            )
                                        }}
                                    </button>
                                </div>
                                <button class="btn btn-link" type="button">
                                    More Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PageHeading from "../../components/Core/PageHeading";
import Loading from "../../components/Core/Loading";
import { Input } from "mdb-ui-kit";

export default {
    name: "EmployeeRequestFormIndex",
    components: {
        PageHeading,
        Loading
    },
    data() {
        return {
            loading: false,
            filterSelected: "",
            filterOptions: [],
            searchField: "",
            timer: null
        };
    },
    async mounted() {
        await this.getErfs();
        this.initInput();
        this.initFilterOptions();
    },
    computed: {
        ...mapGetters({
            ERFS: "employeeRequestForm/ERFS"
        })
    },
    methods: {
        ...mapActions({
            GET_ERFS: "employeeRequestForm/GET_ERFS"
        }),
        initInput() {
            document.querySelectorAll(".form-outline").forEach(formOutline => {
                new Input(formOutline).init();
            });
        },
        initFilterOptions() {
            this.$getConst("ERF_FILTER_OPTIONS").forEach(name => {
                let curr = name
                    .replaceAll("-", " ")
                    .split(" ")
                    .map(x => {
                        return x[0].toUpperCase() + x.slice(1);
                    })
                    .join(" ");

                this.filterOptions.push(curr);
            });
            this.filterSelected = this.filterOptions[0];
        },
        async getErfs() {
            this.loading = true;

            try {
                await this.GET_ERFS({
                    filter: this.filterSelected
                        .toLowerCase()
                        .replaceAll(" ", "-"),
                    search: this.searchField
                });
                this.$toast.success("Data updated");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
            }
        },
        getTextApproval(item) {
            let res = "";
            switch (item.approval.approval_by_pic) {
                case null:
                    res = "Waiting PIC Approval";
                    break;
                case 0:
                    res = `Rejected by ${item.approval.pic.name}`;
                    break;
                case 1:
                    res = `Approved by PIC
                                     ${item.approval.pic.name} -
                                    ${this.$moment(
                                        item.approval.updated_at,
                                        "YYYY-MM-DDTHH:mm:ssZ"
                                    ).format("DD/MMMM/YYYY")}`;

                    break;
            }

            return res;
        },
        getStatusBadge(approval) {
            let color = "";
            switch (approval) {
                case null:
                    color = "info";
                    break;
                case 0:
                    color = "danger";
                    break;
                default:
                    color = "success";
                    break;
            }

            return `bg-${color}`;
        },
        getStatusText(approval) {
            let text = "";
            switch (approval) {
                case null:
                    text = "Needs Approval";
                    break;
                case 0:
                    text = "Rejected";
                    break;
                default:
                    text = "All Approved";
                    break;
            }

            return text;
        },
        async changeFilter(name) {
            this.loading = true;
            this.filterSelected = name;
            try {
                await this.getErfs();
                this.$toast.success("Data updated");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
            }
        },
        searchForTitle() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                this.getErfs();
            }, 800);
        }
    }
};
</script>

<style></style>
