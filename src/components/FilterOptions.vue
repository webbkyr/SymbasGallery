<template>
  <div class='pg__filters'>
    <p>Filter photos based on the following:</p>
    <div class='filter-container' v-for='filter in filters' :key='filter.value'>
      <input :value='filter.value' @click='filter.onClick' type='checkbox' :checked="activeFilter === filter.value">
      <label :for='filter.for'>{{ filter.text }}</label>
    </div>
    <!-- <input value='adult' type='checkbox' :checked="activeFilter === 'adult'" @click='setFilter' >
    <label for='adultPhotos'>Adult Photos</label>
    <input value='all' type='checkbox' @click='setFilter' :checked="activeFilter === 'all'">
    <label for='showAllPhotos'>Show all Photos</label> -->
  </div>
</template>

<script>
export default {
  name: 'FilterOptions',
  data() {
    return {
      filters: [
          { value: 'puppy', onClick: this.setFilter, text: 'Puppy Photos', for: 'puppyPhotos'}, 
          { value: 'adult', onClick: this.setFilter, text: 'Adult Photos', for: 'adultPhotos' }, 
          { value: 'all', onClick: this.setFilter, text: 'Show all Photos', for: 'allPhotos' }]
    }
  },
  methods: {
    setFilter(event) {
      console.log('event current target', event.currentTarget.value)
      this.$store.commit('setActiveFilter', event.currentTarget.value);
    } 
    // togglePuppy(event) {
    //   if (event.currentTarget.checked) {
    //     this.$store.commit('togglePuppy', true);
    //   } else {
    //     this.$store.commit('togglePuppy', false);
    //   }
    // },
    // toggleAdult(event) {
    //   if (event.currentTarget.checked) {
    //     this.$store.commit('toggleAdult', true);
    //   } else {
    //     this.$store.commit('toggleAdult', false);
    //   }
    // },
    // toggleShowAll() {
    //   this.$store.commit('toggleShowAll');
    // },
  },
  computed: {
    activeFilter() {
      return this.$store.state.activeFilter;
    }
  }
};
</script>

<style scoped>

.pg__filters {
  margin-bottom: 10px;
}

</style>
