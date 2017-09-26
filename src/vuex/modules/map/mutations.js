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
	setSelection: (state, vals) => {
		state.displaySelection = false;
		for(var i=0; i<state.search.proposition.length; i++)
		{
	    	if(state.search.proposition[i].id == vals)
	    	{
	    		state.selection = state.search.proposition[i];
	    	}
		}

		state.displaySelection = true;
	    state.search.proposition = [];
	},
	setDisplaySelection: (state, vals) => {
	    state.displaySelection = vals;
	},
}
