<template>
    <div v-if="CANDIDATE_CARD.data">
        <div class="row">
            <div
                class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center"
            >
                <cards-svg />
                <table class="table table-borderless table-hover mt-4">
                    <tbody>
                        <tr>
                            <th class="text-start font-weight-bold pe-0">
                                Created by
                            </th>
                            <td class="ps-0">:</td>
                            <td>{{ card.pic.name }}</td>
                        </tr>
                        <tr>
                            <th class="text-start font-weight-bold pe-0">
                                Created at
                            </th>
                            <td class="ps-0">:</td>
                            <td>
                                {{
                                    card.dates.created_at
                                        | moment("DD MMMM YYYY")
                                }}
                            </td>
                        </tr>
                        <tr>
                            <th class="text-start font-weight-bold pe-0">
                                Last updated by
                            </th>
                            <td class="ps-0">:</td>
                            <td>{{ card.last_updated_by.name }}</td>
                        </tr>
                        <tr>
                            <th class="text-start font-weight-bold pe-0">
                                Last updated at
                            </th>
                            <td class="ps-0">:</td>
                            <td>
                                {{
                                    card.last_updated_dates.updated_at
                                        | moment("DD MMMM YYYY")
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-md-8">
                <table class="table text-start">
                    <thead class="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Employee Request Form</td>
                            <td>{{ card.employee_request_form.title }}</td>
                            <td>
                                <router-link
                                    :to="{
                                        name: 'employee-request-forms-show',
                                        params: {
                                            id: card.employee_request_form_id
                                        }
                                    }"
                                    type="button"
                                    class="btn btn-secondary"
                                >
                                    View
                                </router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>Talent</td>
                            <td>
                                <span v-if="card.talent">{{
                                    card.talent.name
                                }}</span
                                ><span v-else class="text-danger"
                                    >No talent assigned</span
                                >
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-mdb-toggle="modal"
                                    data-mdb-target="#modalTalent"
                                >
                                    Take action
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Candidate Account</td>
                            <td>
                                <span v-if="card.candidate">{{
                                    card.candidate.name
                                }}</span
                                ><span v-else class="text-danger"
                                    >No user account assigned</span
                                >
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    :class="{ disabled: !card.talent }"
                                    :disabled="!card.talent"
                                >
                                    Take action
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <modal-talent />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardsSvg from "../../assets/svg/Cards";
import ModalTalent from "./ModalTalent";
export default {
    name: "CandidateCardDetails",
    components: {
        CardsSvg,
        ModalTalent
    },
    computed: {
        ...mapGetters({
            CANDIDATE_CARD: "candidateCard/CANDIDATE_CARD"
        }),
        card() {
            if (this.CANDIDATE_CARD.data) {
                return this.CANDIDATE_CARD.data;
            }

            return {};
        }
    }
};
</script>

<style></style>
