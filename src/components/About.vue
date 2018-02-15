<template>
  <div class='about'>
    <h1>About</h1>
    <h2>...Symba</h2>
    <p>{{ text }}</p>
    <h2>...this Gallery</h2>
    <p>Github repo: xxxxx</p>
    <p>{{ text }}</p>
    <h2>...me</h2>
    <p>{{ text }}</p>
    <h2>Contact</h2>
    <p>Github: webbkyr</p>
    <p>Twitter: kayrwebb</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    text: 'Born August 25, 2015 - Duis sem ipsum, luctus sit amet congue et, pretium quis lectus. Nulla facilisi. Aliquam in imperdiet tellus, in faucibus felis. Donec mauris ex, mattis ac pulvinar vitae, suscipit consectetur orci. Nunc arcu magna, dapibus a dolor at, gravida rutrum leo. Vivamus ultrices non ipsum et ultricies. Vestibulum molestie velit eu rutrum eleifend. Quisque et lacus ac nibh efficitur viverra. Maecenas varius vestibulum ligula eget molestie.',
  }),
};
</script>

<style scoped>
.about {
  margin: 0 auto;
  padding: 5px;
}
h2 {
  font-weight: normal;
}

</style>
