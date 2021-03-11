<template>
    <div>
        <page-heading title="Talent Details" />
        <div class="row">
            <div class="col">
                <div class="card text-center shadow-4-strong">
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-tabs">
                            <li class="nav-item">
                                <router-link
                                    exact-active-class="active"
                                    class="nav-link"
                                    :to="{ name: 'talents-show' }"
                                    >Details</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    exact-active-class="active"
                                    class="nav-link"
                                    :to="{ name: 'talents-show-edit' }"
                                    >Edit</router-link
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeading from "../../components/Core/PageHeading.vue";

export default {
    name: "TalentDetail",
    components: { PageHeading }
};
</script>

<style scoped></style>
