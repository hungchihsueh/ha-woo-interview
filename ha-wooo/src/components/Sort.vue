<template>
  <div class=" d-flex align-items-center justify-content-end">
    <label for="sort-select" class="me-3 text-nowrap">Sort by:</label>
    <select @change="handleSort" id="sort-select" class="form-select">
      <option value="1">Popular</option>
      <option value="2">Newest</option>
      <option value="3">Price</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Sort",
  props:{
   
  },
  methods: {
    handleSort(e){
      // console.log(e.target.value);
      this.$emit('sorted',e.target.value);
  },
}}
</script>
<style scoped>
#sort-select{
    max-width: 10rem;
    min-width: 5rem;
}
</style>
