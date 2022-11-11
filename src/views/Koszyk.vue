<template>
  <div class="koszyk">
    <h1 class="koszyk__header">Koszyk</h1>

    <h3 class="koszyk__subHeader">Twoje zakupy</h3>

    <div class="koszyk__content">
      <KoszykProduct
        v-for="product in koszyk.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import KoszykProduct from "../components/KoszykProduct";
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const koszyk = computed(() => store.getters.getKoszyk);
const products = ref([]);

const getProducts = async () => {
  const response = await axios.get("http://192.168.0.34:8000/api/products");
  const { data } = await response;
  products.value = data;
};

onMounted(() => {
  getProducts();
});
</script>

<style scoped>
.koszyk {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .koszyk {
    margin: 0 20px;
  }
}

.koszyk__header {
  text-align: center;
  text-transform: uppercase;
}

.koszyk__subHeader {
  color: #f59705;
  font-size: 18px;
  text-align: center;
}

.koszyk__content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
