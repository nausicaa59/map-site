import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {mutations} from './mutations';


const state = {
  	map : {
		zoom: 0,
		x: 1001,
		y: 805.5	
  	},
  	search : {
  		current : "",
  		proposition : []
  	},
  	selection : undefined,
  	stats : undefined,
  	errorAjax : false,
  	errorLabel : ""
}

export default {
	namespace: 'map/',
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
