<template>
    <div class="container-fluid">
        <div v-if="TALENT.data" class="row gx-5">
            <div
                class="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center"
            >
                <user-profile-svg />
                <a
                    type="button"
                    class="btn btn-secondary"
                    :href="TALENT.data.cv"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Download CV</a
                >
                <div class="mt-4 text-muted">
                    <p class="mb-1">Created by {{ TALENT.data.pic.name }}</p>
                    <small
                        >Created at
                        {{
                            TALENT.data.dates.created_at | moment("DD-MM-YYYY")
                        }}</small
                    >
                </div>
            </div>
            <div class="col-12 col-md-7">
                <table class="table table-borderless table-hover text-start">
                    <tbody>
                        <tr v-for="(name, index) in details" :key="index">
                            <th scope="row">{{ name }}</th>
                            <td class="td-left">:</td>
                            <td class="td-left">{{ getItem(name) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import UserProfileSvg from "../../assets/svg/UserProfile";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "TalentsDetail",
    components: {
        UserProfileSvg
    },
    mounted() {
        this.getTalent();
    },
    data() {
        return {
            id: this.$route.params.id,
            loading: false,
            details: [
                "Name",
                "Source",
                "Address",
                "Applied Position",
                "DOB",
                "Email",
                "Gender",
                "Last Education",
                "Mobile Phone",
                "NIK",
                "Total Working Experience",
                "University"
            ]
        };
    },
    computed: {
        ...mapGetters({
            TALENT: "talent/TALENT"
        })
    },
    methods: {
        ...mapActions({
            GET_TALENT: "talent/GET_TALENT"
        }),
        async getTalent() {
            this.loading = true;

            try {
                await this.GET_TALENT(this.id);
                this.$toast.success("Data loaded");
            } catch (err) {
                this.$toast.error("Error! " + err.response.statusText);
                if (err.response.status == 404) {
                    this.$toast.info("Redirecting you to main page ...");
                    await this.$delay(3000);
                    this.$router.push({ name: "talents" });
                }
            } finally {
                this.loading = false;
            }
        },
        getItem(name) {
            let res = name.toLowerCase().replaceAll(" ", "_");
            return this.TALENT.data[`${res}`];
        }
    }
};
</script>

<style scoped>
th {
    padding: 0.25rem;
    width: 10rem;
    font-weight: 700;
}

td {
    padding: 0.25rem;
}

.td-left {
    text-align: left;
}
</style>
