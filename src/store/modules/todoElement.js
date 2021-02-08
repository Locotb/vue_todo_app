export default {
    actions: {
        async fetchTodos(ctx) {
            const todos = await ( await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') ).json();
            ctx.commit('updateTodos', todos);
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos;
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state) {
            return state.todos;
        }
    }
}