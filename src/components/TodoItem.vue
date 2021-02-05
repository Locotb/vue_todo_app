<template>
    <li>
        <span :class="{completed: isCompleted}">
            <input type="checkbox" @change="isCompleted = !isCompleted">
            {{ index + 1 }}. {{ todo.title }}
            <button class="remove" @click="$emit('remove-item', todo.id)">&times;</button>
        </span>
    </li>
</template>

<script>
export default {
    data() {
        return {
            isCompleted: false
        }
    },
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
    
}
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        border: 1px solid black;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
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
    input {
        margin-right: 1rem;
    }
</style>