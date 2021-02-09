export default {
    actions: {
        async fetchTodos(ctx) {
            const response = await ( await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') ).json();
            ctx.commit('updateTodos', response);
        }
    },
    mutations: {
        updateTodos(state, response) {
            response.forEach(item => {
                if (!state.todos.find(todo => todo.id === item.id)) state.todos.push(item);
            });
            state.loading = false;
        },
        addTodo(state, newTodo) {
            state.todos.push(newTodo);
        },
        changeTodoStatus(state, todoId) {
            let todo = state.todos.find(todo => todo.id === todoId);
            if (todo) todo.completed = !todo.completed;
        },
        removeTodo(state, todoId) {
            let todo = state.todos.find(todo => todo.id === todoId);
            if (todo) state.todos = state.todos.filter(todo => todo.id !== todoId);
        }
    },
    state: {
        todos: [],
        loading: true
    },
    getters: {
        allTodos(state) {
            return state.todos;
        },

    }
}