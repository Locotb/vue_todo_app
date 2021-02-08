<template>
    <li>
        <span>
            <button class="done" @click="$emit('change-state', todo.id)">{{ changeButtonName }}</button>
            <p :class="{ completed: todo.completed }">{{ index + 1 }}. {{ todo.title }}</p>
            <button class="remove" @click="$emit('remove-item', todo.id)">&times;</button>
        </span>
    </li>
</template>

<script>
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