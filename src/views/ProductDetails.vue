<template>
  {{ product?.name }}
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const product = ref({});

const getProduct = async () => {
  const response = await axios.get(
    `http://192.168.0.34:8000/api/product/${route.params.id}`
  );
  const { data } = await response;
  product.value = data;
};

onMounted(() => {
  if (!route.params.id || isNaN(route.params.id)) {
    alert(`Nie znaleziono produktu o id: ${route.params.id}`)
    return router.push('/');
  }

  getProduct();
});
</script>

<style>
</style>