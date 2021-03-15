<template>
    <div>
        <div class="row">
            <div
                class="col-12 d-flex justify-content-between align-items-center"
            >
                <page-heading title="Employee Request Form Create" />
                <loading v-if="loading" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
                <find-svg />
            </div>
            <div class="col-12 col-md-8">
                <div class="card shadow-2-strong p-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <form id="erfForm" @submit.prevent="createForm">
                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.title"
                                                    type="text"
                                                    id="title"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="title"
                                                    >Title</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.branch"
                                                    type="text"
                                                    id="branch"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="branch"
                                                    >Branch</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-3">
                                            <div class="form-outline">
                                                <input
                                                    v-model="
                                                        form.age_range_from
                                                    "
                                                    type="number"
                                                    id="age_range_from"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="age_range_from"
                                                    >Age Range From</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.age_range_to"
                                                    type="number"
                                                    id="age_range_to"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="age_range_to"
                                                    >Age Range To</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.department"
                                                    type="text"
                                                    id="department"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="department"
                                                    >Department</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.job_title"
                                                    type="text"
                                                    id="job_title"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="job_title"
                                                    >Job Title</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <textarea
                                                    v-model="
                                                        form.business_justification
                                                    "
                                                    id="business_justification"
                                                    class="form-control"
                                                    required
                                                    rows="4"
                                                ></textarea>
                                                <label
                                                    class="form-label"
                                                    for="business_justification"
                                                    >Business
                                                    Justification</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.division"
                                                    type="text"
                                                    id="division"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="division"
                                                    >Division</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.education"
                                                    type="text"
                                                    id="education"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="education"
                                                    >Last Education</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col ms-2">
                                            <label
                                                for="employee_status"
                                                class="me-4"
                                                >Employee Status</label
                                            >
                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="
                                                        form.employee_status
                                                    "
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="employee_status"
                                                    id="status_permanent"
                                                    value="Permanent"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="status_permanent"
                                                    >Permanent</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="
                                                        form.employee_status
                                                    "
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="employee_status"
                                                    id="status_internship"
                                                    value="Internship"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="status_internship"
                                                    >Internship</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="
                                                        form.employee_status
                                                    "
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="employee_status"
                                                    id="status_contract"
                                                    value="Contract"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="status_contract"
                                                    >Contract</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="sex" class="me-4"
                                                >Gender</label
                                            >
                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.sex"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="sex"
                                                    id="sex_male"
                                                    value="Male"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="sex_male"
                                                    >Male</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.sex"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="sex"
                                                    id="sex_female"
                                                    value="Female"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="sex_female"
                                                    >Female</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.sex"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="sex"
                                                    id="sex_both"
                                                    value="Both"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="sex_both"
                                                    >Both</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col ms-2">
                                            <label for="planning" class="me-4"
                                                >Planning</label
                                            >
                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.planning"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="planning"
                                                    id="planned"
                                                    value="Planned"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="planned"
                                                    >Planned</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.planning"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="planning"
                                                    id="not_planned"
                                                    value="Not Planned"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="not_planned"
                                                    >Not Planned</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="purpose" class="me-4"
                                                >Purpose</label
                                            >
                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.purpose"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="purpose"
                                                    id="replacement"
                                                    value="Replacement"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="replacement"
                                                    >Replacement</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.purpose"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="purpose"
                                                    id="additional"
                                                    value="Additional"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="additional"
                                                    >Additional</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col ms-2">
                                            <label
                                                for="working_hours"
                                                class="me-4"
                                                >Working Hours</label
                                            >
                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.working_hours"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="working_hours"
                                                    id="part-time"
                                                    value="Part-Time"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="part-time"
                                                    >Part-Time</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.working_hours"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="working_hours"
                                                    id="full-time"
                                                    value="Full-Time"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="full-time"
                                                    >Full-Time</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="position" class="me-4"
                                                >Position</label
                                            >
                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.position"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="position"
                                                    id="leader"
                                                    value="Leader"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="leader"
                                                    >Leader</label
                                                >
                                            </div>

                                            <div
                                                class="form-check form-check-inline"
                                            >
                                                <input
                                                    v-model="form.position"
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="position"
                                                    id="non-leader"
                                                    value="Non-leader"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="non-leader"
                                                    >Non-leader</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <!--  -->

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="
                                                        form.min_experience
                                                    "
                                                    type="number"
                                                    id="min_experience"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="min_experience"
                                                    >Min. Experience</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.quantity"
                                                    type="number"
                                                    id="quantity"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="quantity"
                                                    >Quantity</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.company"
                                                    type="text"
                                                    id="company"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="company"
                                                    >Company</label
                                                >
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    v-model="form.work_location"
                                                    type="text"
                                                    id="work_location"
                                                    class="form-control"
                                                    required
                                                />
                                                <label
                                                    class="form-label"
                                                    for="work_location"
                                                    >Work Location</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <textarea
                                                    v-model="
                                                        form.technical_competencies
                                                    "
                                                    id="technical_competencies"
                                                    class="form-control"
                                                    required
                                                    rows="4"
                                                ></textarea>
                                                <label
                                                    class="form-label"
                                                    for="technical_competencies"
                                                    >Technical
                                                    Competencies</label
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-check ms-2">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="1"
                                                    id="validCheck"
                                                    required
                                                />
                                                <label
                                                    class="form-check-label font-weight-bold"
                                                    for="validCheck"
                                                    >I'm sure this form is
                                                    correct and I've doubled
                                                    check my inputs.</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-danger mb-2">
                                        * All fields are required
                                    </p>
                                    <div class="d-flex justify-content-center">
                                        <button
                                            v-if="!loading"
                                            type="submit"
                                            class="btn btn-primary btn-block mb-4"
                                            :class="{ disabled: loading }"
                                            :disabled="loading"
                                        >
                                            Create ERF
                                        </button>
                                        <loading v-else />
                                    </div>
                                </form>
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
import { Input } from "mdb-ui-kit";
import PageHeading from "../../components/Core/PageHeading";
import Loading from "../../components/Core/Loading";
import FindSvg from "../../assets/svg/Find";

export default {
    name: "CreateERF",
    components: {
        PageHeading,
        Loading,
        FindSvg
    },
    mounted() {
        this.initInput();
    },
    data() {
        return {
            loading: false,
            form: {}
        };
    },
    computed: {
        ...mapGetters({
            ERF: "employeeRequestForm/ERF"
        })
    },
    methods: {
        ...mapActions({
            CREATE_ERF: "employeeRequestForm/CREATE_ERF"
        }),
        initInput() {
            document.querySelectorAll(".form-outline").forEach(formOutline => {
                new Input(formOutline).init();
            });
        },
        async createForm() {
            this.loading = true;
            if (this.form.age_range_to < this.form.age_range_from) {
                this.$toast.error(
                    "Age range to must be greater than age range from"
                );
                document.getElementById("age_range_from").focus();
                this.$scrollTo("#app", { duration: 300 });
                this.loading = false;
                return false;
            }
            try {
                await this.CREATE_ERF(this.form);
                this.$toast.success("ERF Created");
                this.$toast.info("Redirecting you to main page");
                await this.$delay(2000);
                this.$router.push({
                    name: "employee-request-forms-index"
                });
            } catch (err) {
                if (err.response) {
                    this.$toast.error("Error! " + err.response.statusText);
                } else {
                    this.$toast.error("Something went wrong");
                }
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style></style>
