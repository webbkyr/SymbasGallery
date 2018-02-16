<template>
  <div class='about'>
    <h1>What's this app?</h1>
    <h2>About Symba</h2>
    <p>{{ bio }}</p>
    <h2>The Code</h2>
    <p>{{ theProject }}</p>
    <p>GitHub repo: <a :href='links[0].url' target=_blank>Link</a></p>
    <h2>Contact Me</h2>
    <p>GitHub: webbkyr</p>
    <p>Twitter: kayrwebb</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    bio: 'Symba was born August 25, 2015. We got her when she was just 10 weeks old. As a puppy, she was fiesty and hyper but now, at almost 3 years old, she is a loveable lion. She likes fetch and she likes to chase squirrels and groundhogs. She loves hugs, kisses and to use you as a pillow (and often does not realize how large she is at 110 lbs.)',
    theProject: 'This application was built using the VueJS framework, vue-router, vuex for state management, HTML5 and CSS3.',
    links: [
      { name: 'Github', url: 'https://github.com/webbkyr/SymbasGallery' },
    ],
  }),
};
</script>

<style scoped>
.about {
  width: 500px;
  margin: 0 auto;
  padding: 25px;
}
h2 {
  font-weight: normal;
}

</style>
