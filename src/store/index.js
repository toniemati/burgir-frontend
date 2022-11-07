import { createStore } from 'vuex';
import {koszyk} from './modules/koszyk';

export default createStore({
  modules: {
    koszyk
  }
})
