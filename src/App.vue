<template>
    <div id="app">
        <h1>Todo application</h1>
        <AddItem 
            @add-item="addItem"
        />
        <TodoList 
            :todos="todos"
            @remove-item="removeItem"
        />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddItem from '@/components/AddItem.vue';

export default {
    name: 'App',
    data() {
        return {
            todos: [
                {id: 1, title: 'Сходить в магазин'},
                {id: 2, title: 'Убрать в комнате'},
                {id: 3, title: 'Сделать уроки'}
            ]
        }
    },
    components: {
        TodoList,
        AddItem
    },
    methods: {
        removeItem(id) {
            this.todos = this.todos.filter(item => item.id !== id)
        },
        addItem(newItem) {
            this.todos.push(newItem);
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
