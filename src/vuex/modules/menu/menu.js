import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {mutations} from './mutations';


const state = {
  	displayMenu : false,
}

export default {
	namespace: 'menu/',
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
