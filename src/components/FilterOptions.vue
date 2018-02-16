<template>
  <div class='pg__filters'>
    <p>Filter photos based on the following:</p>
    <div class='filter-container' v-for='filter in filters' :key='filter.value'>
      <input :value='filter.value' @click='filter.onClick'
       type='checkbox' :checked="activeFilter === filter.value">
      <label :for='filter.for'>{{ filter.text }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterOptions',
  data() {
    return {
      filters: [
        { value: 'puppy', onClick: this.setFilter, text: 'Puppy Photos', for: 'puppyPhotos' },
        { value: 'adult', onClick: this.setFilter, text: 'Adult Photos', for: 'adultPhotos' },
        { value: 'all', onClick: this.setFilter, text: 'Show all Photos', for: 'allPhotos' }],
    };
  },
  methods: {
    setFilter(event) {
      this.$store.commit('setActiveFilter', event.currentTarget.value);
    },
  },
  computed: {
    activeFilter() {
      return this.$store.state.activeFilter;
    },
  },
};
</script>

<style scoped>
.filter-container {
  display: inline;
  padding: 5px;
}

.pg__filters {
  margin-bottom: 10px;
}

</style>
