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
	    state.search.proposition.forEach(function(item){
	    	if(item.id == vals)
	    	{
	    		state.selection = item;
	    	}
	    });

	    state.search.proposition = [];
	},
	setDisplaySelection: (state, vals) => {
	    state.displaySelection = vals;
	    console.log(state.displaySelection);
	},
}
