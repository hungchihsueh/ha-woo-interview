<template>
  <div class="d-flex align-items-center justify-content-end">
    <label for="sort-select" class="me-3">Sort by:</label>
    <select id="sort-select" class="form-select">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
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
    width: 10%;
}
</style>
