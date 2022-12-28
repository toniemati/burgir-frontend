<template>
  <div class="home">
    <h1 class="home__header">Home</h1>

    <h3 class="home__subHeader">Statystyki naszej burgirowni 🍔</h3>

    <div class="home__content">
      <Orders />
    </div>
  </div>
</template>

<script setup>
import Orders from "../views/stats/Orders";
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media only screen and (min-width: 768px) {
  .home {
    padding: 0 20px;
  }
}

.home__header {
  text-align: center;
  text-transform: uppercase;
}

.home__subHeader {
  color: #f59705;
  font-size: 18px;
  text-align: center;
}

</style>
