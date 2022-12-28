<template>
  <div v-if="delivery.id" class="delivery">
    <h1 class="delivery__header">Dostawa - {{ $route.params.id }}</h1>

    <div class="delivery__content">
      <div class="delivery__stat">
        Dystans:
        <span class="delivery__value">{{ delivery.distance }} km</span>
      </div>

      <div class="delivery__stat">
        Dostarczono:
        <span class="delivery__value">
          {{ delivery.delivered ? "tak" : "nie" }}
        </span>
      </div>

      <div class="delivery__stat">
        Pracownik:
        <span class="delivery__value">
          <router-link :to="'/pracownik/' + delivery.employee?.id">
            {{ delivery.employee?.first_name }}
            {{ delivery.employee?.last_name }}
          </router-link>
        </span>
      </div>

      <div class="delivery__stat">
        Auto:
        <span class="delivery__value">
          <router-link :to="'/auto/' + delivery.car?.id">
            {{ delivery.car?.plates }}
          </router-link>
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

const delivery = ref({});
const route = useRoute();
const router = useRouter();

const getDelivery = async () => {
  const response = await axios.get(API_URL + "deliveries/" + route.params.id);
  const { data } = await response;

  if (!data.id) return router.back();

  delivery.value = data;
};

onMounted(() => {
  getDelivery();
});
</script>

<style scoped>
.delivery {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .delivery {
    padding: 0 20px;
  }
}

.delivery__header {
  text-align: center;
  text-transform: uppercase;
}

.delivery__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.delivery__stat {
  font-size: 16px;
}

.delivery__value {
  font-weight: bold;
  font-size: 18px;
  color: #f59705;
}

.delivery__content a {
  color: #f59705;
  text-decoration: none;
}
</style>