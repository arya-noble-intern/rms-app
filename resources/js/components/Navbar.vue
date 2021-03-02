<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                RMS
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto"></ul>

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a
                            id="navbarDropdown"
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {{ ME.name }}
                        </a>

                        <ul
                            class="dropdown-menu "
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <router-link
                                    :to="{ name: 'home' }"
                                    class="dropdown-item"
                                    >Home</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    :to="{ name: 'about' }"
                                    class="dropdown-item"
                                    >About</router-link
                                >
                            </li>
                            <li>
                                <a
                                    class="dropdown-item text-decoration-none pe-auto"
                                    href="javascript:void(0)"
                                    @click="logout()"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
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

<style></style>
