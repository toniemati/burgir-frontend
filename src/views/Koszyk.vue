<template>
  <div class="koszyk">
    <h1>customer: {{ koszyk.customer_id }}</h1>

    <h2>products</h2>
    
    <ul>
      <li v-for="p in koszyk.products" :key="p">
        {{ p }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const koszyk = computed(() => store.getters.getKoszyk);

console.log(koszyk.value.products);
</script>
