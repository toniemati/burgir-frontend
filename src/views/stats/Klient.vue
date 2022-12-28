<template>
  <div v-if="customer.id" class="customer">
    <h1 class="customer__header">Klient - {{ $route.params.id }}</h1>

    <div class="customer__content">
      <div class="customer__stat">
        Imie:
        <span class="customer__value">{{ customer.first_name }}</span>
      </div>

      <div class="customer__stat">
        Nazwisko:
        <span class="customer__value">{{ customer.last_name }}</span>
      </div>

      <div class="customer__stat">
        Kraj:
        <span class="customer__value">{{ customer.country }}</span>
      </div>

      <div class="customer__stat">
        Miasto:
        <span class="customer__value">{{ customer.city }}</span>
      </div>

      <div class="customer__stat">
        Ulica:
        <span class="customer__value">{{ customer.street }}</span>
      </div>

      <div class="customer__stat">
        Numer domu:
        <span class="customer__value">{{ customer.house_number }}</span>
      </div>

      <div class="customer__stat">
        Telefon:
        <span class="customer__value">{{ customer.telephone }}</span>
      </div>

      <div class="customer__stat">
        E-mail:
        <span class="customer__value">{{ customer.email }}</span>
      </div>

      <div class="customer__stat">
        Liczba zamówień:
        <span class="customer__value">{{ customer.orders.length }}</span>
      </div>

      <div class="customer__stat">
        Suma zamówionych produktów:
        <span class="customer__value">
          {{
            customer.orders.reduce(
              (prev, curr) => prev + curr.products.length,
              0
            )
          }}
        </span>
      </div>

      <div class="customer__stat">
        Łączna cena zamówień:
        <span class="customer__value">
          {{
            customer.orders
              .reduce(
                (prev, curr) =>
                  prev +
                  curr.products.reduce((prev, curr) => prev + curr.price, 0),
                0
              )
              .toFixed(2)
          }}
          zł
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { API_URL } from "@/config";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const customer = ref({});
const route = useRoute();
const router = useRouter();

const getCustomer = async () => {
  const response = await axios.get(API_URL + "customer/" + route.params.id);
  const { data } = await response;

  if (!data.id) return router.back();

  customer.value = data;
};

onMounted(() => {
  getCustomer();
});
</script>

<style scoped>
.customer {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .customer {
    padding: 0 20px;
  }
}

.customer__header {
  text-align: center;
  text-transform: uppercase;
}

.customer__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.customer__stat {
  font-size: 16px;
}

.customer__value {
  font-weight: bold;
  font-size: 18px;
  color: #f59705;
}

.customer__content a {
  color: #f59705;
  text-decoration: none;
}
</style>