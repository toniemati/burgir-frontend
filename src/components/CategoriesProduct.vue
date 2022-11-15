<template>
  <router-link :to="`/product/details/${product.id}`" class="product">
    <div class="product__left">
      <img :src="props.product.img" :alt="props.product.name" />
    </div>

    <div class="product__right">
      <div class="right__name">{{ props.product.name }}</div>

      <div class="right__desc">{{ props.product.description.substr(0, 70) }}</div>
    </div>

    <button @click="addToCart" class="product__addButton">
      🛒 {{ props.product.price }}
    </button>
  </router-link>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";

const store = useStore();

const props = defineProps({
  product: Object,
});

const addToCart = (e) => {
  e.preventDefault();
  store.dispatch("addToCart", props.product.id);
};
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #eee;
  text-decoration: none;
}
.product:hover .product__right .right__name {
  color: #f59705;
}

.product:hover .product__left img {
  transform: scale(1.1);
}

.product__left {
  border-radius: 10px;
  overflow: hidden;
}

.product__left img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.product__right {
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.right__name {
  font-size: 18px;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
}

.right__desc {
  font-style: italic;
}

.product__addButton {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background: #f59705;
  opacity: 0.75;
  color: #eee;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.product__addButton:hover {
  background: #eee;
  color: #f59705;
}
</style>