<template>
  <div>
    <h1>To-do List</h1>
  </div>
  <div>
    <input type="text" id="todo_input" v-model="first_todo" />
    <button for="todo_input"></button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo_list: [],
      first_todo: 'Write your todo'
    }
  },
  methods: {
    plusTodo() {}
  }
}
</script>
<style scoped></style>
