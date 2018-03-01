/**
 * Store
 *
 * This store holds the entire state. The store’s state can only be changed by
 * committing mutations.
 *
 * Further Reading: https://vuex.vuejs.org/en/intro.html
 *
 * Usage:
 *
 * 1. Add any new variables to the state. (state.js)
 * 2. Create a new mutation type. (constants.js)
 * 3. Create a new action. (actions.js)
 * 4. Create a new mutation. (mutations.js)
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
