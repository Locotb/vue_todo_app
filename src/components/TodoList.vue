<template>
    <div class="container">
        <ul>
            <TodoItem 
                v-for="(todo, i) of todos"
                :todo="todo"
                :index="i"
                :key="todo.id"
                @remove-item="removeItem"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        removeItem(id) {
            this.$emit('remove-item', id);
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .container {
        display: flex;
        justify-content: center;
    }
</style>