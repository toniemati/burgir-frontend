<script setup>
</script>

<template>
  <nav class="header">
    <ul class="header__list">
      <li class="header__item">
        <router-link to="/menu">Menu</router-link>
      </li>

      <li class="header__item">
        <router-link to="/koszyk">Koszyk</router-link>
      </li>
    </ul>

    <div class="header__logo">
      <router-link to="/">
        <img class="header__img" src="../assets/burgir.png" alt="Burgir" />
      </router-link>
    </div>

    <ul class="header__list">
      <li class="header__item">
        <router-link to="/onas">O nas</router-link>
      </li>

      <li class="header__item">
        <router-link to="/kontakt">Kontakt</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  padding: 20px 0;
  background: #272727;
  background: linear-gradient(45deg, #272727 0%, #0d0d0d 50%, #272727 100%);
  z-index: 100;
}

@media only screen and (min-width: 480px) {
  .header {
    column-gap: 30px;
  }
}

.header__list {
  list-style-type: none;
  text-transform: uppercase;
  display: flex;
  column-gap: 20px;
}

/* .header__item {} */

.header__item a {
  font-weight: bold;
  color: #eee;
  text-decoration: none;
  transition: all 200ms ease-in-out;
}

.header__item a.router-link-exact-active {
  color: #f59705;
}

.header__logo {
  display: flex;
}

.header__img {
  width: 40px;
  height: 40px;
}
</style>
