<template>
    <div class="container">
        <h2 @click="f1">Todo list</h2>
        <router-link to="/">Home</router-link>
        <AddItem />
        <TodoList />
        <Loader 
            v-if="$store.state.todoElement.loading"
        />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddItem from '@/components/AddItem.vue';
import Loader from '../components/Loader.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            filter: 'all',
        }
    },
    components: {
        TodoList,
        AddItem,
        Loader
    },
    computed: {
        ...mapGetters(['allTodos']),
    }
}
</script>

<style scoped>
    .container {
        max-width: 70%;
        margin: 0 auto;
        overflow: hidden;
    }
</style>