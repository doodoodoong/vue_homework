<template>
  <div class="bowl">
    <h1 class="text-6xl m-4">To-do List</h1>
    <h2 class="text-3xl p-5 m-4">Now..Your todo is... {{ todo }}</h2>
    <p class="complete_count text-2xl m-4">
      Your Complete is : {{ completedTodoList.length }}
    </p>

    <h2 class="alert" v-if="falseTodoList.length > 5">Hurry up!</h2>
    <h2 v-if="completedTodoList.length > 10">Go to Home! Workerholic</h2>
    <input
      class="m-5 p-1 rounded"
      type="text"
      id="todo_input"
      v-model="todo"
      @keyup.enter="plusTodo"
    />
    <button
      class="border border-yellow-900 rounded p-1 bg-yellow-900 text-white"
      @click="plusTodo"
    >
      To-do Plus!
    </button>
    <br />
    <br />
    <li class="list" v-for="todo in falseTodoList" :key="todo">
      {{ todo.name }}
      <button
        class="border border-yellow-900 rounded p-1 bg-yellow-900 text-white m-2"
        @click="completeTodo(todo)"
      >
        Complete!
      </button>
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
<style scoped>
.bowl {
  width: 100vw;
  height: 100vh;
}
.complete_count {
  margin: 20px;
}
.alert {
  font-size: xx-large;
  color: black;
  font-weight: 900;
}
</style>
