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
        border: 1px solid white;
        padding: 15px;
        margin-bottom: 15px;
    }
    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p {
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: justify;
        word-break: break-all;
    }
    .completed {
        text-decoration: line-through;
    }
    .remove {
        background: #E52B50;
        color: white;
        margin-left: 15px;
    }
    .remove:hover {
        background: #bd2b48;
    }
    .done {
        background-color: #8CFF7F;
        margin-right: 15px;
        padding: 0 10px;
    }
    .done:hover {
        background-color: #76bd6e;
    }
</style>