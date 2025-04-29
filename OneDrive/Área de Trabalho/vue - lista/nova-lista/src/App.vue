<template>
  <div class="container">
    <h1>📝 <span>Lista de Tarefas</span></h1>

    <div class="input-area">
      <input v-model="newTask" placeholder="Adicione uma nova tarefa" />
      <button @click="addTask">Adicionar</button>
    </div>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span :class="{ completed: task.done }" @click="toggleTask(index)">
          {{ task.text }}
        </span>
        <button class="remove-btn" @click="removeTask(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, done: false });
        this.newTask = '';
      }
    },
    toggleTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
:global(body, html, #app) {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #1e1e1e;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: #2e2e2e;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  color: #f1f1f1;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #f1c40f;
}

h1 span {
  color: #f1c40f;
}

.input-area {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  background-color: #f1c40f;
  color: #000;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #d4ac0d;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #3a3a3a;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed {
  text-decoration: line-through;
  color: #888;
  cursor: pointer;
}

.remove-btn {
  background-color: transparent;
  color: red;
  font-size: 16px;
  cursor: pointer;
  border: none;
}
</style>
