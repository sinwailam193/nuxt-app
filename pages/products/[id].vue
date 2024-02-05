<template>
    <div>
        <h2>Product detail for {{ id }}</h2>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "products",
});

const { id } = useRoute().params;
</script>
