<template>
  <div>
    <div>
      <input
        type="radio"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input
        type="radio"
        name=""
        id="javascript"
        value="JS"
        v-model="favoriteLang"
      />
      <label for="javascript">JAVASCRIPT</label>
    </div>
    <div>Choose Language : {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      favoriteLang: ''
    }
  }
}
</script>
<style scoped></style>
