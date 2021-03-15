<template>
    <div v-if="ME.data">
        <nav
            class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary border-bottom border-warning border-3"
        >
            <div class="container-fluid">
                <a class="navbar-brand" href="/"
                    ><img
                        src="/logo-white.png"
                        alt="aryanoble logo"
                        style="max-width: 45px"
                /></a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-angle-down"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                        <li class="nav-item mt-2 mt-lg-0">
                            <a
                                class="nav-link disabled text-white"
                                href="javascript:void(0)"
                            >
                                <i class="fas fa-user me-2"></i>
                                {{ ME.data.name }}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="javascript:void(0)"
                                @click="logout"
                                >Logout</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="nav-scroller bg--body shadow-4">
            <nav class="nav nav-underline" aria-label="Secondary navigation">
                <router-link
                    v-for="(item, index) in routers[ME.data.role.name]"
                    :key="index"
                    :to="{ name: item.to }"
                    class="nav-link"
                    >{{ item.name }}</router-link
                >
            </nav>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "navbar",
    mounted() {
        this.GET_ME();
    },
    computed: {
        ...mapGetters({
            ME: "user/ME"
        })
    },
    data() {
        return {
            routers: {
                pic: [
                    {
                        to: "home",
                        name: "Home"
                    },
                    {
                        to: "talents",
                        name: "Talent Pool"
                    },
                    {
                        to: "employee-request-forms-index",
                        name: "ERForms"
                    },
                    {
                        to: "candidate-cards-index",
                        name: "Candidate Cards"
                    }
                ],
                leader: [
                    {
                        to: "home",
                        name: "Home"
                    },
                    {
                        to: "employee-request-forms-index",
                        name: "ERForms"
                    },
                    {
                        to: "candidate-cards-index",
                        name: "Candidate Cards"
                    }
                ]
            }
        };
    },
    methods: {
        ...mapActions({
            GET_ME: "user/GET_ME"
        }),

        async logout() {
            await axios.post("/logout");
            window.location.href = "/";
        }
    }
};
</script>

<style>
.router-link-exact-active {
    color: #007bff !important;
}
</style>
