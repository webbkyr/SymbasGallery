<template>
  <div class='about'>
    <h1>About Symba</h1>
    <p>{{ bio }}</p>
    <h1>The Code</h1>
    <icon name='css3'></icon>
    <icon name='html5'></icon>
    <icon name='trello'></icon>
    <p>{{ thePurpose }}</p>
    <p>{{ theProject }}</p>
    <icon name="github"></icon>
    <p id='repo'><a :href='links[0].url' target=_blank>View on GitHub</a> </p>
  </div>
</template>

<script>
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/css3';
import 'vue-awesome/icons/html5';
import 'vue-awesome/icons/trello';
import Icon from 'vue-awesome/components/Icon';

export default {
  components: {
    Icon,
  },
  name: 'About',
  data: () => ({
    bio: 'Symba was born August 25, 2015. We got her when she was just 10 weeks old. As a puppy, she was fiesty and hyper but now, at almost 3 years old, she is a loveable lion. She likes fetch and she likes to chase squirrels and groundhogs. She loves hugs, kisses and to use you as a pillow (and often does not realize how large she is at 110 lbs.)',
    thePurpose: 'I wanted to build something relatively quickly to learn about VueJs. I love photos/tribute pages (and Symba!). I also built a similar project with React (using random puppies), so I figured this would be a good starter project.',
    theProject: 'This application was built using the VueJS framework, vue-router, vuex for state management, HTML5 and CSS3.',
    links: [
      { name: 'Github', url: 'https://github.com/webbkyr/SymbasGallery' },
    ],
  }),
};
</script>

<style scoped>

@media (max-width: 750px ) {
  .about {
    width: 300px;
  }
}
.about {
  max-width: 650px;
  margin: 0 auto;
  padding: 15px;
}

#repo {
  margin: 5px;
}
.fa-icon {
width: 20px;
height: auto;
}
a {
  text-decoration: none;
}
h2 {
  font-weight: normal;
}

</style>
