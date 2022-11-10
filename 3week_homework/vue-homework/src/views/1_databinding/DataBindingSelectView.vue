<template>
  <div>
    <select name="" id="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">seoul</option>
      <option value="062">gwangju</option>
      <option value="061">Joennam</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedCity: '061'
    }
  }
}
</script>
<style scoped></style>
