<template>
  <footer id='pg-footer'>
    <p id='footer-text'> {{ text }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Pg-Footer',
  data() {
    return {
      text: '2018 © Kayla R. Webb | Built with VueJS',
    };
  },
};
</script>

<style scoped>
#pg-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #476268
}
#footer-text {
  font-size: 14px;
  color: #F1F1F1;
}
</style>
