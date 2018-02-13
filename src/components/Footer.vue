<template>
  <footer id='pg-footer'>
    <p> {{ text }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Pg-Footer',
  data() {
    return {
      text: '© Kayla R. Webb | Built with VueJS',
    };
  },
};
</script>

<style scoped>
#pg-footer {
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 395px;
}
</style>
