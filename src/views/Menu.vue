<template>
  <div class="menu">
    <h1 class="menu__header">Menu</h1>

    <h3 class="menu__subHeader">Sprawdź to mordo!</h3>

    <div class="menu__content">
      <Categories :categories="categories" />
    </div>
  </div>
</template>

<script setup>
import Categories from "../components/Categories";
import axios from "axios";
import { onMounted, ref } from "vue";
import { API_URL } from "@/config";

const categories = ref([]);

const getCategories = async () => {
  const response = await axios.get(API_URL + "categories");
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

@media only screen and (min-width: 768px) {
  .menu {
    padding: 0 20px;
  }
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
