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
  width: 150px;
  height: 40px;
  margin-top: 15px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 14px;
}
</style>
