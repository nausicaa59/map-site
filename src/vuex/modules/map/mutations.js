export const mutations = {
	mapZoom: (state, vals) => {
	    state.map.zoom = vals;
	},
	mapX: (state, vals) => {
	    state.map.x = vals;
	},
	mapY: (state, vals) => {
	    state.map.y = vals;
	},
	setSearchCurrent: (state, vals) => {
	    state.search.current = vals;
	},
	setSearchProposition: (state, vals) => {
	    state.search.proposition = vals;
	},
}
