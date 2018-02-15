<template>
  <div class='pg__filters'>
    <p>Filter photos based on the following:</p>
    <input id='puppy_checkbox' value='puppy' type='checkbox'  @click='togglePuppy'>
    <label for='puppyPhotos'>Puppy Photos</label>
    <input id='adult_checkbox' value='adult' type='checkbox'  @click='toggleAdult'>
    <label for='adultPhotos'>Adult Photos</label>
    <input id='show_all_checkbox' value='all' type='checkbox'
    @click='toggleShowAll' checked>
    <label for='showAllPhotos'>Show all Photos</label>
  </div>
</template>

<script>
export default {
  name: 'FilterOptions',
  methods: {
    togglePuppy(event) {
      if (event.currentTarget.checked) {
        this.$store.commit('togglePuppy', true);
      } else {
        this.$store.commit('togglePuppy', false);
      }
    },
    toggleAdult(event) {
      if (event.currentTarget.checked) {
        this.$store.commit('toggleAdult', true);
      } else {
        this.$store.commit('toggleAdult', false);
      }
    },
    toggleShowAll() {
        this.$store.commit('toggleShowAll');
    }
  },
};
</script>

<style scoped>
.pg__filters {
  margin-bottom: 10px;
}

</style>
