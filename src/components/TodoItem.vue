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
            let buttonName;
            if (this.todo.completed === true) buttonName = 'Cancel';
            if (this.todo.completed === false) buttonName = 'Done';
            return buttonName;
        }
    }
}
</script>

<style scoped>
    li {
        /* display: flex; */
        /* justify-content: space-between; */
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
    }
    .remove {
        background: red;
        border-radius: 50%;
        color: white;
        cursor: pointer;
    }
    .completed {
        text-decoration: line-through;
    }
    .done {
        margin-right: 1rem;
    }
</style>