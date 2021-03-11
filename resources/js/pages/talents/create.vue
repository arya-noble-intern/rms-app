<template>
    <div>
        <div class="row">
            <div class="col-6 d-flex align-items-center justify-content-center">
                <new-entry-svg />
            </div>
            <div class="col-6 d-flex align-items-center justify-content-start">
                <page-heading title="Create New Talent" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="saveTalent">
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.name"
                                    type="text"
                                    id="name"
                                    class="form-control"
                                    required
                                />
                                <label class="form-label" for="name"
                                    >Name</label
                                >
                            </div>
                        </div>
                        <div class="col">
                            <select
                                class="form-select form-control"
                                aria-label="source select"
                                v-model="form.source"
                            >
                                <option selected disabled value="0"
                                    >Select source</option
                                >
                                <option value="Jobstreet">Jobstreet</option>
                                <option value="Kalibrr">Kalibrr</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-outline mb-4">
                        <input
                            v-model="form.address"
                            type="text"
                            id="address"
                            class="form-control"
                        />
                        <label class="form-label" for="address">Address</label>
                    </div>

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.applied_position"
                                    type="text"
                                    id="applied_position"
                                    class="form-control"
                                    required
                                />
                                <label class="form-label" for="applied_position"
                                    >Applied Position</label
                                >
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.dob"
                                    type="date"
                                    id="dob"
                                    class="form-control"
                                />
                                <label class="form-label" for="dob"
                                    >Date of Birth</label
                                >
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.email"
                                    type="email"
                                    id="email"
                                    class="form-control"
                                />
                                <label class="form-label" for="email"
                                    >E-mail</label
                                >
                            </div>
                        </div>
                        <div class="col">
                            <select
                                v-model="form.gender"
                                class="form-select form-control"
                                aria-label="gender"
                            >
                                <option selected disabled value="0"
                                    >Select Gender</option
                                >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.last_education"
                                    type="text"
                                    id="last_education"
                                    class="form-control"
                                />
                                <label class="form-label" for="last_education"
                                    >Last Education</label
                                >
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.mobile_phone"
                                    type="number"
                                    id="mobile_phone"
                                    class="form-control"
                                />
                                <label class="form-label" for="mobile_phone"
                                    >Mobile Phone</label
                                >
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.nik"
                                    type="text"
                                    id="nik"
                                    class="form-control"
                                />
                                <label class="form-label" for="nik">NIK</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.total_working_experience"
                                    type="number"
                                    id="total_working_experience"
                                    class="form-control"
                                />
                                <label
                                    class="form-label"
                                    for="total_working_experience"
                                    >Work Experience (years)</label
                                >
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input
                                    v-model="form.university"
                                    type="text"
                                    id="university"
                                    class="form-control"
                                />
                                <label class="form-label" for="university"
                                    >University</label
                                >
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-12 col-md-6">
                            <label class="form-label" for="cv">CV</label>
                            <input
                                @change="changeFile"
                                type="file"
                                class="form-control"
                                id="cv"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button
                            v-if="!loading"
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                            :class="{ disabled: loading }"
                            :disabled="loading"
                        >
                            Save Talent
                        </button>
                        <dot-loader v-else :color="'#f77f00'" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Input } from "mdb-ui-kit";
import { mapActions } from "vuex";
import PageHeading from "../../components/Core/PageHeading.vue";
import NewEntrySvg from "../../assets/svg/NewEntry.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";
export default {
    name: "CreateTalentPage",
    components: { PageHeading, NewEntrySvg, DotLoader },
    mounted() {
        this.initInput();
    },
    data() {
        return {
            form: {
                name: "",
                source: "0",
                address: "",
                applied_position: "",
                dob: this.$moment(new Date()).format("YYYY-MM-DD"),
                email: "",
                gender: "0",
                last_education: "",
                mobile_phone: "",
                nik: "",
                total_working_experience: "",
                university: ""
            },
            file: null,
            loading: false
        };
    },

    methods: {
        ...mapActions({
            SAVE_TALENT: "talent/SAVE_TALENT"
        }),
        initInput() {
            document.querySelectorAll(".form-outline").forEach(formOutline => {
                new Input(formOutline).init();
            });

            document.getElementById("dob").valueAsDate = new Date();
            document.getElementById("dob").focus();
            document.getElementById("name").focus();
        },
        changeFile(e) {
            const file = e.target.files[0];
            this.file = file;
        },
        async saveTalent() {
            this.loading = true;
            this.$toast.info("Saving...");
            const formData = new FormData();
            const entries = Object.entries(this.form);
            for (const [formName, value] of entries) {
                formData.append(`${formName}`, `${value}`);
            }
            formData.append("cv", this.file);

            try {
                await this.SAVE_TALENT(formData);
                this.$toast.success("Talent Saved..");
                this.$toast.info(
                    "Please wait, redirecting to list in 3 seconds.."
                );

                await this.redirect();
            } catch (err) {
                this.$toast.error("Error...");
            } finally {
                this.loading = false;
            }
        },

        async redirect() {
            this.loading = true;
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
            await delay(3000);
            this.$router.push({ name: "talents" });
            this.loading = false;
        }
    }
};
</script>
