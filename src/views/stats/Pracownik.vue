<template>
  <div v-if="employee.id" class="employee">
    <h1 class="employee__header">Pracownik - {{ $route.params.id }}</h1>

    <div class="employee__content">
      <div class="employee__stat">
        Imie:
        <span class="employee__value">{{ employee.first_name }}</span>
      </div>

      <div class="employee__stat">
        Nazwisko:
        <span class="employee__value">{{ employee.last_name }}</span>
      </div>

      <div class="employee__stat">
        Zajęty:
        <span class="employee__value">
          {{ employee.bussy ? "tak" : "nie" }}
        </span>
      </div>

      <div class="employee__stat">
        Tytuł:
        <span class="employee__value">
          {{ employee.title }}
        </span>
      </div>

      <div class="employee__stat">
        Data zatrudnienia:
        <span class="employee__value">
          {{ employee.hire_date }}
        </span>
      </div>

      <div class="employee__stat">
        Pensja:
        <span class="employee__value"> {{ employee.salary }} zł </span>
      </div>

      <div class="employee__stat">
        Adres:
        <span class="employee__value">
          {{ employee.address }}
        </span>
      </div>

      <div class="employee__stat">
        Suma dostaw:
        <span class="employee__value">
          {{ employee.deliveries.length }}
        </span>
      </div>

      <div class="employee__stat">
        Łączny dystans dostaw:
        <span class="employee__value">
          {{
            employee.deliveries.reduce((prev, curr) => prev + curr.distance, 0)
          }}
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

const employee = ref({});
const route = useRoute();
const router = useRouter();

const getEmployee = async () => {
  const response = await axios.get(API_URL + "employee/" + route.params.id);
  const { data } = await response;

  if (!data.id) return router.back();

  employee.value = data;
};

onMounted(() => {
  getEmployee();
});
</script>

<style scoped>
.employee {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .employee {
    padding: 0 20px;
  }
}

.employee__header {
  text-align: center;
  text-transform: uppercase;
}

.employee__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.employee__stat {
  font-size: 16px;
}

.employee__value {
  font-weight: bold;
  font-size: 18px;
  color: #f59705;
}

.employee__content a {
  color: #f59705;
  text-decoration: none;
}
</style>