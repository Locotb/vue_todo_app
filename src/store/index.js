import { createStore } from 'vuex';
import todoElement from './modules/todoElement.js';

const store = createStore({
  modules: {
      todoElement
  }
});

export default store;