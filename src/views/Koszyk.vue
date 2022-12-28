<template>
  <div class="koszyk">
    <h1 class="koszyk__header">Koszyk</h1>

    <h3 class="koszyk__subHeader">Twoje zakupy</h3>

    <button
      v-if="koszyk.products.length >= 1"
      @click="goModalVisible"
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
      <div v-if="!option.length" class="modal__options">
        <button @click="option = 'log'">Zaloguj się</button>

        <button @click="option = 'reg'">Zarejestruj się</button>
      </div>

      <div v-else-if="option === 'log'" class="modal__login">
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

      <form
        v-else-if="option === 'reg'"
        class="modal__register"
        @submit="handleFormSubmit"
      >
        <div class="register__group">
          <input type="text" placeholder="Imię" />
          <input type="text" placeholder="Nazwisko" />
        </div>

        <div class="register__group">
          <input type="text" placeholder="Kraj" />
          <input type="text" placeholder="Miasto" />
        </div>

        <div class="register__group">
          <input type="text" placeholder="Ulica" />
          <input type="text" placeholder="Nr. mieszkania/domu" />
        </div>

        <div class="register__group">
          <input type="text" placeholder="Telefon" />
          <input type="text" placeholder="E-mail" />
        </div>

        <button type="submit">Zarejestruj się</button>
      </form>
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
const option = ref("");

const goModalVisible = () => {
  showModal.value = true;
};

const zamow = (customerId) => {
  store.dispatch("setCustomer", customerId);
  store.dispatch("zamow");
  showModal.value = false;
};

const handleKlientChange = (e) => {
  zamow(e.target.value);
};

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const data = {
    first_name: e.target[0].value,
    last_name: e.target[1].value,
    country: e.target[2].value,
    city: e.target[3].value,
    street: e.target[4].value,
    house_number: e.target[5].value,
    telephone: e.target[6].value,
    email: e.target[7].value,
  };

  try {
    const response = await axios.post(API_URL + "customers", data);
    e.target.reset();
    zamow(response.data.id);
    option.value = "";
  } catch (e) {
    alert("Nie udało się zarejestrować, spróbuj ponownie poźniej");
  }
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
  padding: 0 5px;
  width: 100%;
  height: max-content;
  margin-top: 10%;
}

@media only screen and (min-width: 768px) {
  .modal__content {
    max-width: 1000px;
    padding: 0 20px;
  }
}

.modal__options {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
.modal__options button {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background: #f59705;
  opacity: 1;
  color: #eee;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.modal__options button:hover {
  background: #eee;
  color: #f59705;
}

.modal__login {
  display: flex;
  justify-content: center;
}

.modal__register {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.register__group {
  display: flex;
  row-gap: 10px;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .register__group {
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;
  }
}

.modal__register input {
  width: 100%;
  font-family: Lato;
  outline: none;
  background: black;
  border: 1px solid #f59705;
  border-radius: 5px;
  padding: 10px 15px;
  color: #eee;
  font-size: 16px;
}

.modal__register input::placeholder {
  font-family: Lato;
  color: #eee;
  opacity: 0.85;
}

.modal__register button {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background: #f59705;
  opacity: 1;
  color: #eee;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

@media only screen and (min-width: 768px) {
  .modal__register button {
    width: 300px;
    margin: 0 auto;
  }
}

.modal__register button:hover {
  background: #eee;
  color: #f59705;
}
</style>
