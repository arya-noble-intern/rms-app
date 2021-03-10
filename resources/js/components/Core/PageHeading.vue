<template>
    <div>
        <h1 class="h3 text-uppercase mb-4">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: "PageHeading",
    props: {
        title: {
            type: String,
            default: ""
        }
    }
};
</script>

<style></style>
