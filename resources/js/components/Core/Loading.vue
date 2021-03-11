<template>
    <dot-loader :color="'#f77f00'" />
</template>

<script>
import DotLoader from "vue-spinner/src/DotLoader.vue";

export default {
    name: "Loading",
    components: {
        DotLoader
    }
};
</script>

<style></style>
