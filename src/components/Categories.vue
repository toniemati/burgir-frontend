<template>
  <div class="categories">
    <div
      class="category"
      v-for="category in props.categories"
      :key="category.id"
    >
      <h2 class="category__name">{{ category.name }}</h2>

      <div class="category__products">
        <CategoriesProduct
          v-for="product in category.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoriesProduct from "../components/CategoriesProduct";
import { defineProps } from "vue";

const props = defineProps({
  categories: Array,
});
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.category {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #f59705;
}

.category__name {
  color: #f59705;
}

.category__products {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>