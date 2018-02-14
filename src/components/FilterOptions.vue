<template>
  <div class='pg__filters'>
    <p>Filter photos based on the following:</p>
    <input id='puppy_checkbox' type='checkbox'>
    <label for='puppyPhotos'>Puppy</label>
    <input id='adult_checkbox' type='checkbox'>
    <label for='adultPhotos'>Adult</label>
  </div>
</template>

<script>
export default {
  name: 'FilterOptions',
};
</script>

<style scoped>
.pg__filters {
  margin-bottom: 10px;
}

</style>
