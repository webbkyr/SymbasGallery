<template>
  <button @click='clicked' class='pg__button'>{{ text }}</button>
</template>

<script>
export default {
  name: 'Pg-button',
  props: ['text', 'clicked'],
  // methods: {
  //   clicked() {
  //     console.log('I was clicked!');
  //   },
  // },

};
</script>

<style scoped>
.pg__button {
  width: 150px;
  height: 40px;
  margin-top: 15px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
.pg__button:hover {
  background-color: #42b983;
  color: white;
}
</style>
