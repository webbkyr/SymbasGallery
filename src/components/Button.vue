<template>
  <button class='pg__button'>{{ text }}</button>
</template>

<script>
export default {
  name: 'Pg-button',
  props: ['text'],
};
</script>

<style scoped>
.pg__button {
  width: 100px;
  height: 50px;
  border: 1px solid black;
}
</style>
