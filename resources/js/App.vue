<template>
    <div class="app">
        <Navbar></Navbar>
        <div class="mt-4">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    name: "app",
    components: {
        Navbar
    }
};
</script>

<style></style>
