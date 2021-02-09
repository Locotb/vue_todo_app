<template>
    <li>
        <span>
            <button class="done" @click="onChangeStatus(todo.id)">{{ changeButtonName }}</button>
            <p :class="{ completed: todo.completed }">{{ index + 1 }}. {{ todo.title }}</p>
            <button class="remove" @click="onRemoveTodo(todo.id)">&times;</button>
        </span>
    </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    },
    computed: {
        changeButtonName() {
            return this.todo.completed ? 'Cancel' : 'Done';
        },
    },
    methods: {
        ...mapMutations(['changeTodoStatus', 'removeTodo']),
        onChangeStatus(todoId) {
            this.changeTodoStatus(todoId)
        },
        onRemoveTodo(todoId) {
            this.removeTodo(todoId);
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid black;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    span {
        display: flex;
        justify-content: space-between;
    }
    p {
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: justify;
        word-break: break-all;
    }
    .remove {
        background: red;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        margin-left: 1rem;
    }
    .completed {
        text-decoration: line-through;
    }
    .done {
        margin-right: 1rem;
    }
</style>