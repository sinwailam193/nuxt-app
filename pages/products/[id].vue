<template>
    <div v-if="!pending">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
    <div v-else>
        <p>loading from server</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "products",
});

const { id } = useRoute().params;

const { data: product, pending } = await useFetch(
    `https://fakestoreapi.com/products/${id}`,
    { server: false, key: id }
);

console.log(product);
</script>
