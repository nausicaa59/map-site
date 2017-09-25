import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {mutations} from './mutations';


const state = {
  	map : {
		zoom: "",
		x: 0,
		y: 0	
  	},
  	search : {
  		current : "",
  		proposition : []
  	},
  	selection : undefined,
  	displaySelection : false,
}

export default {
	namespace: 'map/',
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
