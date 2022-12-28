<template>
  <div class="car">
    <h1 class="car__header">Auto - {{ $route.params.id }}</h1>

    <div class="car__content">
      <div class="car__stat">
        Rejestracja:
        <span class="car__value">{{ car.plates }}</span>
      </div>

      <div class="car__stat">
        Zajęte:
        <span class="car__value">{{ car.bussy ? "tak" : "nie" }}</span>
      </div>

      <div class="car__stat">
        Przebieg:
        <span class="car__value">{{ car.mileage }} km</span>
      </div>

      <div class="car__stat">
        Liczba dostaw:
        <span class="car__value">{{ car.deliveries?.length }}</span>
      </div>

      <div class="car__stat">
        Całkowity dystans dostaw:
        <span class="car__value">
          {{ car.deliveries?.reduce((prev, curr) => prev + curr.distance, 0) }}
          km
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

const car = ref({});
const route = useRoute();
const router = useRouter();

const getCar = async () => {
  const response = await axios.get(API_URL + "car/" + route.params.id);
  const { data } = await response;

  if (!data.id) return router.back();

  car.value = data;
};

onMounted(() => {
  getCar();
});
</script>

<style scoped>
.car {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .car {
    padding: 0 20px;
  }
}

.car__header {
  text-align: center;
  text-transform: uppercase;
}

.car__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.car__stat {
  font-size: 16px;
}

.car__value {
  font-weight: bold;
  font-size: 18px;
  color: #f59705;
}

.car__content a {
  color: #f59705;
  text-decoration: none;
}
</style>