<template>
    <div>
        <div class="row mt-4">
            <div class="col-12">
                <form-request />
            </div>
            <div class="col-12">
                <table class="table table-hover">
                    <tbody>
                        <tr v-for="(value, name) in list" class="text-start">
                            <th scope="row" class="font-weight-bold">
                                {{ name | capitalize }}
                            </th>
                            <td>{{ value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormRequest from "../../assets/svg/FormRequest";
export default {
    name: "ERFDetails",
    components: {
        FormRequest
    },
    async mounted() {
        if (!Object.keys(this.ERF).length) {
            await this.GET_ERF(this.$route.params.id);
        }
        this.initData();
    },
    data() {
        return {
            list: {
                title: "",
                age_range_from: "",
                age_range_to: "",
                branch: "",
                business_justification: "",
                department: "",
                division: "",
                education: "",
                employee_status: "",
                job_title: "",
                min_experience: "",
                planning: "",
                purpose: "",
                quantity: "",
                sex: "",
                technical_competencies: "",
                work_location: "",
                working_hours: "",
                position: "",
                company: ""
            }
        };
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
            ERF: "employeeRequestForm/ERF"
        })
    },
    methods: {
        ...mapActions({
            GET_ERF: "employeeRequestForm/GET_ERF"
        }),
        initData() {
            for (const item in this.list) {
                this.list[`${item}`] = this.ERF.data[`${item}`];
            }
        }
    }
};
</script>

<style></style>
