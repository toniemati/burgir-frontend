<template>
  <div class="koszyk">
    <h1 class="koszyk__header">Koszyk</h1>

    <h3 class="koszyk__subHeader">Twoje zakupy</h3>

    <button
      v-if="koszyk.products.length >= 1"
      @click="zamow()"
      class="koszyk__zamowButton"
    >
      Zamów i zapłać
    </button>

    <router-link v-else to="/menu" class="koszyk__menuLink">
      Jak chcesz coś zjeść to dodaj to najpierw do koszyka :)
    </router-link>

    <div v-if="products.length" class="koszyk__content">
      <KoszykProduct
        v-for="product in koszyk.products"
        :key="product.id"
        :product="product"
        :list="products"
      />
    </div>
  </div>

  <div v-if="showModal" class="modal">
    <div class="modal__content">
      <div class="content__klient">
        <select @change="handleKlientChange">
          <option value="null" selected disabled>Wybierz klienta</option>
          <option
            v-for="customer in customers"
            :key="customer.id"
            :value="customer.id"
            name="customer"
          >
            {{ customer.id }}. {{ customer.first_name }}
            {{ customer.last_name }}
          </option>
        </select>
      </div>

      <div class="content__form">form</div>
    </div>
  </div>
</template>

<script setup>
import KoszykProduct from "../components/KoszykProduct";
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { API_URL } from "@/config";

const store = useStore();
const koszyk = computed(() => store.getters.getKoszyk);
const products = ref([]);
const customers = ref([]);
const showModal = ref(false);

const zamow = () => {
  showModal.value = true;
  // store.dispatch("zamow");
};

const handleKlientChange = (e) => {
  store.dispatch("setCustomer", e.target.value);
  store.dispatch("zamow");
  showModal.value = false;
};

const getProducts = async () => {
  const response = await axios.get(API_URL + "products");
  const { data } = await response;
  products.value = data;
};

const getCustomers = async () => {
  const response = await axios.get(API_URL + "customers");
  const { data } = await response;
  customers.value = data;
};

onMounted(() => {
  getProducts();
  getCustomers();
});
</script>

<style scoped>
.koszyk {
  position: relative;
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

.koszyk__zamowButton {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  color: #f59705;
  background: #eee;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

@media only screen and (min-width: 480px) {
  .koszyk__zamowButton {
    width: 300px;
    margin: 0 auto;
  }
}

.koszyk__zamowButton:hover {
  color: #eee;
  background: #f59705;
}

.koszyk__menuLink {
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
  color: #117098;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.koszyk__menuLink:hover {
  filter: brightness(1.5);
}

.koszyk__content {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000aa;
  display: flex;
  justify-content: center;
}

.modal__content {
  margin-top: 10%;
}
</style>
