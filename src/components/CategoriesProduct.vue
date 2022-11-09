<template>
  <div class="product">
    <div class="product__left">
      <img :src="props.product.img" :alt="props.product.name" />
    </div>

    <div class="product__right">
      {{ props.product.description }}
    </div>

    <button @click="addToCart" class="product__addButton">
      🛒 {{ props.product.price }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";

const store = useStore();

const props = defineProps({
  product: Object,
});

const addToCart = () => {
  store.dispatch("addToCart", props.product.id);
};
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.product__left {
  border-radius: 10px;
  overflow: hidden;
}

.product__left img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.product__right {
  flex: 1;
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