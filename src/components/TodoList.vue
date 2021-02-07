<template>
    <!-- <div class="container"> -->
        <ul>
            <TodoItem 
                v-for="(todo, i) of todos"
                :todo="todo"
                :index="i"
                :key="todo.id"
                @remove-item="removeItem"
                @change-state="changeState"
            />
        </ul>
    <!-- </div> -->
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    props: {
        todos: {
            type: Object,
            required: true
        }
    },
    components: {
        TodoItem
    },
    methods: {
        removeItem(id) {
            this.$emit('remove-item', id);
        },
        changeState(id) {
            this.$emit('change-state', id);
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
    /* .container {
        display: flex;
        justify-content: center;
    } */
</style>