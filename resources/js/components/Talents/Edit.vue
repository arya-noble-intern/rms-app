<template>
    <div>
        <div class="row">
            <div class="col d-flex align-items-center justify-content-center">
                <edit-talent />
                <publish />
            </div>
        </div>
        <form @submit.prevent="updateTalent" class="mt-4">
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
                        <label class="form-label" for="name">* Name</label>
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
                            >* Applied Position</label
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
                            required
                        />
                        <label class="form-label" for="dob"
                            >* Date of Birth</label
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
                        <label class="form-label" for="email">E-mail</label>
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
                        <label class="form-label" for="total_working_experience"
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
                    <label class="form-label" for="cv"
                        >New CV (Leave it blank if no need to update CV)</label
                    >
                    <input
                        @change="changeFile"
                        type="file"
                        class="form-control"
                        id="cv"
                    />
                </div>
            </div>
            <small class="text-danger">* Required fields</small>
            <div class="d-flex justify-content-center mt-2">
                <button
                    v-if="!loading"
                    type="submit"
                    class="btn btn-secondary btn-block mb-4"
                    :class="{ disabled: loading }"
                    :disabled="loading"
                >
                    Update Talent
                </button>
                <loading v-else />
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Input } from "mdb-ui-kit";
import EditTalent from "../../assets/svg/EditTalent";
import Publish from "../../assets/svg/Publish";
import Loading from "../../components/Core/Loading";

export default {
    name: "TalentsEdit",
    components: {
        EditTalent,
        Publish,
        Loading
    },
    computed: {
        ...mapGetters({
            TALENT: "talent/TALENT"
        })
    },
    async mounted() {
        if (
            !Object.keys(this.TALENT).length ||
            this.TALENT.data.id !== this.$route.params.id
        ) {
            await this.GET_TALENT(this.$route.params.id);
        }

        await this.initData();
        this.initInput();
    },
    data() {
        return {
            form: {
                name: "",
                source: "0",
                address: "",
                applied_position: "",
                dob: "",
                email: "",
                gender: "0",
                last_education: "",
                mobile_phone: "",
                nik: "",
                total_working_experience: "",
                university: ""
            },
            loading: false,
            file: null
        };
    },
    methods: {
        ...mapActions({
            GET_TALENT: "talent/GET_TALENT",
            UPDATE_TALENT: "talent/UPDATE_TALENT"
        }),
        initInput() {
            document.querySelectorAll(".form-outline").forEach(formOutline => {
                new Input(formOutline).init();
            });

            document.querySelectorAll("input").forEach(x => {
                x.focus();
            });
            document.getElementById("name").focus();
        },
        initData() {
            return new Promise(resolve => {
                for (const item in this.form) {
                    this.form[`${item}`] = this.TALENT.data[`${item}`];
                }

                resolve();
            });
        },
        changeFile(e) {
            const file = e.target.files[0];
            this.file = file;
        },
        async updateTalent() {
            this.loading = true;
            this.$toast.info("Saving...");
            const updateForm = new FormData();
            const entries = Object.entries(this.form);
            for (const [formName, value] of entries) {
                updateForm.append(`${formName}`, `${value}`);
            }
            if (this.file) {
                updateForm.append("cv", this.file);
            }

            try {
                await this.UPDATE_TALENT({
                    id: this.$route.params.id,
                    formData: updateForm
                });
                this.$toast.success("Talent Updated..");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style></style>
