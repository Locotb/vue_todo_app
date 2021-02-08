<template>
    <div class="container">
        <h2>Todo list</h2>
        <router-link to="/">Home</router-link>

        <AddItem 
            @add-item="addItem"
        />
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <Loader 
            v-if="loading" 
        />
        <TodoList
            v-else-if="filterTodos.length"
            :todos="filterTodos"
            @remove-item="removeItem"
            @change-state="changeState"
        />
        <p v-else>No todos</p>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddItem from '@/components/AddItem.vue';
import Loader from '@/components/Loader.vue';

export default {
    name: 'App',
    data() {
        return {
            todos: [],
            loading: true,
            filter: 'all'
        }
    },
    components: {
        TodoList,
        AddItem,
        Loader
    },
    async mounted() {
        let jsonRes = await ( await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') ).json();
        this.todos = jsonRes;
        this.loading = false; 
    },
    computed: {
        filterTodos() {
            let val;
            switch (this.filter) {
                case 'all':
                    val = this.todos;
                break;

                case 'completed':
                    val = this.todos.filter(todo => todo.completed);
                break;
            
                case 'not-completed':
                    val = this.todos.filter(todo => !todo.completed);
                break;
            }
            return val;
        }
    },
    methods: {
        removeItem(id) {
            this.todos = this.todos.filter(item => item.id !== id);
        },
        addItem(newItem) {
            this.todos.push(newItem);
        },
        changeState(id) {
            this.todos.forEach(todo => {
                if (todo.id == id) todo.completed = !todo.completed; 
            });
        }
    }
}
</script>

<style scoped>
    select {
        margin-bottom: 1rem;
    }
    .container {
        max-width: 70%;
        margin: 0 auto;
        overflow: hidden;
    }
</style>