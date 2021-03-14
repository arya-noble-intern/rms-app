<template>
    <div>
        <div class="row">
            <div class="col-4">
                <team />
            </div>
            <div class="col-8 d-flex justify-content-center align-items-center">
                <table class="table table-hover">
                    <tbody v-if="ERF.data">
                        <tr v-for="(value, name) in list" :key="name">
                            <th scope="row" class="font-weight-bold">
                                {{ name | capitalize }}
                            </th>
                            <td class="text-start">{{ getData(name) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Team from "../../assets/svg/Team";
export default {
    name: "ERFRequester",
    components: {
        Team
    },
    data() {
        return {
            list: {
                name: "",
                email: ""
            }
        };
    },
    computed: {
        ...mapGetters({
            ERF: "employeeRequestForm/ERF"
        })
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
    methods: {
        getData(name) {
            if (Object.keys(this.ERF).length) {
                return this.ERF.data.leader[`${name}`];
            }

            return "";
        }
    }
};
</script>

<style></style>
