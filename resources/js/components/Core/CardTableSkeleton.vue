<template>
    <div class=" d-flex flex-column">
        <div class="mb-2">
            <skeleton-loader-vue
                type="rect"
                :rounded="true"
                :width="100"
                :height="15"
            />
        </div>
        <div class="mb-1">
            <skeleton-loader-vue
                type="rect"
                :rounded="true"
                :width="250"
                :height="10"
            />
        </div>
        <div class="mb-2">
            <skeleton-loader-vue
                type="rect"
                :rounded="true"
                :width="300"
                :height="10"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "CardTableSkeleton"
};
</script>

<style></style>
