<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapMutations(['addTodo']),
        onSubmit() {
            if ( this.title.trim() ) {
                const newTodo = {
                    userId: 1,
                    id: Date.now(),
                    title: this.title,
                    completed: false
                };
                this.addTodo(newTodo);
                this.title = '';
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
    input {
        margin-right: 1rem;
        width: 400px;
        outline: none;
        border-radius: 10px;
        border: none;
        padding: 3px;
    }
    button:hover {
        background-color: #d4e1e1;      
    }
</style>