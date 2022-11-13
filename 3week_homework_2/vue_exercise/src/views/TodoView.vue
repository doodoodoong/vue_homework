<template>
  <div>
    <h1>To-do List</h1>
  </div>
  <div>
    <h2>Today todo is... {{ todo }}</h2>
    <span>Your Complete is : {{ completedTodoList.length }}</span>
    <br />
    <h2 v-if="falseTodoList.length > 5">Hurry up!</h2>
    <h2 v-if="completedTodoList.length > 10">Go to Home! Workerholic</h2>
    <input type="text" id="todo_input" v-model="todo" @keyup.enter="plusTodo" />
    <button @click="plusTodo">To-do Plus!</button>
    <br />
    <br />
    <li v-for="todo in falseTodoList" :key="todo">
      {{ todo.name }}
      <button @click="completeTodo(todo)">Complete!</button>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: '',
      todo_list: []
    }
  },
  computed: {
    falseTodoList() {
      return this.todo_list.filter((todo) => todo.completed === 'false')
    },
    completedTodoList() {
      return this.todo_list.filter((todo) => todo.completed === 'true')
    }
  },
  methods: {
    plusTodo() {
      this.todo_list.push({
        completed: 'false',
        name: this.todo
      })
      console.log(this.todo_list)
      this.todo = ''
    },
    completeTodo(todo) {
      todo.completed = todo.completed === 'false' ? 'true' : 'false'
    }
  }
}
</script>
<style scoped></style>
