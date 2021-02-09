<template>
    <div>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
        </select>
        <ul>
            <TodoItem 
                v-for="(todo, i) of filterTodos"
                :todo="todo"
                :index="i"
                :key="todo.id"
            />
            <p v-if="!filterTodos.length && !$store.state.todoElement.loading">No todos!</p>
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            filter: 'all'
        }
    },
    components: {
        TodoItem
    },
    computed: {
        ...mapGetters(['allTodos']),
        filterTodos() {
            let arrTodos = Array.from(this.allTodos);
            switch (this.filter) {

                case 'completed':
                    arrTodos = arrTodos.filter(todo => todo.completed);
                break;
            
                case 'not-completed':
                    arrTodos = arrTodos.filter(todo => !todo.completed);
                break;
            }
            return arrTodos;
        }
    },
    async mounted() {
        this.fetchTodos();
    },
    methods: {
        ...mapActions(['fetchTodos']),
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    select {
        margin-bottom: 1rem;
        border-radius: 1%;
        outline: none;
    }
</style>