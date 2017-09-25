import Vue from 'vue';
import Vuex from 'vuex';
import map from './modules/map/map';
import menu from './modules/menu/menu';

Vue.use(Vuex)

const store = new Vuex.Store({
	modules : {
		map,
		menu
	}
})

export default store