<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="css"
        value="CSS"
        v-model="favoriteLang"
      />
      <label for="css">CSS</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="javascript"
        value="JAVASCRIPT"
        v-model="favoriteLang"
      />
      <label for="javascript">JAVASCRIPT</label>
    </div>
    <div>Choose realm : {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      favoriteLang: []
    }
  }
}
</script>
<style scoped></style>
