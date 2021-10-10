import { createStore } from 'vuex';
import goods from './modules/goods';

export default createStore({
  modules: {
    goods,
  },
});
