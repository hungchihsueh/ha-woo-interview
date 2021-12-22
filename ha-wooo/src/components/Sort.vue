<template>
  <div class="mb-3 d-flex align-items-center justify-content-end">
    <label for="sort-select" class="me-3">Sort by:</label>
    <select id="sort-select" class="form-select">
      <option value="1">Popular</option>
      <option value="2">Newest</option>
      <option value="3">Price</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Sort",
};
</script>
<style scoped>
#sort-select{
    max-width: 10rem;
    min-width: 5rem;
}
</style>
