<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header />

  <div class="background">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

body {
  background: #272727;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 83px);
  background-image: url("https://images5.alphacoders.com/953/953074.jpg");
  background-position: 70%;
  background-size: cover;
}

.container {
  max-width: 1000px;
  min-height: calc(100vh - 83px);
  margin: 0 auto;
  padding: 20px 5px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
}
</style>
