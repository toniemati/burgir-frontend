<template>
  <div class="menu">
    <h1 class="menu__header">Menu</h1>

    <h3 class="menu__subHeader">🍔burgir🍔</h3>

    <div class="menu__content">
      <Categories :categories="categories" />
    </div>
  </div>
</template>

<script setup>
import Categories from "../components/Categories";
import axios from "axios";
import { onMounted, ref } from "vue";

const categories = ref([]);

const getCategories = async () => {
  const response = await axios.get("http://192.168.0.34:8000/api/categories");
  const { data } = await response;
  categories.value = data;
};

onMounted(() => {
  getCategories();
});
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.menu__header {
  text-align: center;
  text-transform: uppercase;
}

.menu__subHeader {
  color: #f59705;
  font-size: 18px;
  text-align: center;
}

.menu__content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
