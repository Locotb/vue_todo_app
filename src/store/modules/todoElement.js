export default {
    actions: {
        async fetchTodos(ctx) {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=7');
            const json = await response.json()
            ctx.commit('updateTodos', json);
        }
    },
    mutations: {
        updateTodos(state, json) {
            json.forEach(item => {
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