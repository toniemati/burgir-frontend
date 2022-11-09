<template>
  <div class="koszyk">
    <h1 class="koszyk__header">Koszyk</h1>

    <h3 class="koszyk__subHeader">Twoje zakupy</h3>

    <pre> 
      <p v-for="p in userProducts" :key="p">
        {{ p }}
      </p>
    </pre>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const koszyk = computed(() => store.getters.getKoszyk);
const products = ref();
const userProducts = ref([]);

const getProducts = async () => {
  const response = await axios.get("http://192.168.0.34:8000/api/products");
  const { data } = await response;
  products.value = data;

  setUserProducts(data);
};

const setUserProducts = (data) => {
  const userP = [];

  koszyk.value.products.forEach((kp) =>
    data.forEach((dp) => {
      if (kp.product_id === dp.id) {
        dp.quantity = kp.quantity;
        userP.push(dp);
      }
    })
  );

  userProducts.value = userP;
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

.koszyk__header {
  text-align: center;
  text-transform: uppercase;
}

.koszyk__subHeader {
  color: #f59705;
  font-size: 18px;
  text-align: center;
}
</style>
