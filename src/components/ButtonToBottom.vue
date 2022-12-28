<template>
  <div class="btn" @click="moveToBottom">🔽</div>
</template>

<script setup>
const moveToBottom = () => {
  window.scrollTo(100, document.body.scrollHeight);
};
</script>

<style scoped>
.btn {
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 25px;
  cursor: pointer;
}
</style>