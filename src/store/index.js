import Vuex from 'vuex';
import Vue from 'vue';
import coords from './modules/coords';
import messages from './modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coords,
    messages
  }
});