<template>
  <div class="menu">
    <h1 v-for="(product, idx) in menu" :key="idx">
      {{ product.name }}
    </h1>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const menu = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:8000/api/products");
  const { data } = await response;
  
  console.log(data);
  menu.value = data;
});
</script>
