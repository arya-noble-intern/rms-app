<template>
    <div class="app">
        <Navbar></Navbar>
        <div class="mt-4">
            <div class="container-fluid px-4">
                <router-view></router-view>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
    name: "app",
    components: {
        Navbar,
        Footer
    }
};
</script>

<style lang="scss">
@import "../scss/mdb.free.scss";
</style>
