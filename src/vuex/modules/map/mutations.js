function parseDate(x) {
	var t = new Date(x);
	return t.toLocaleDateString();
}

function parseTitleFromUrl(x) {
	var p = new RegExp("http://www.jeuxvideo.com/forums/[0-9]*-[0-9]*-[0-9]*-[0-9]*-[0-9]*-[0-9]*-[0-9]*-(.*).htm");
	return p.exec(x)[1];
}

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
	setErrorAjax: (state, vals) => {
	    state.errorAjax = vals;
	},
	setErrorLabel: (state, vals) => {
	    state.errorLabel = vals;
	},
	setSearchCurrent: (state, vals) => {
	    state.search.current = vals;
	},
	setSearchProposition: (state, vals) => {
	    state.search.proposition = vals;
	},
	setStats: (state, vals) => {
		state.stats = vals;
		state.stats.NbRepSujet = state.stats.NbRepSujet.toFixed(2);

		for (var i = 0; i < state.stats.Sujets.length; i++) {
			state.stats.Sujets[i].Initialised_at = parseDate(state.stats.Sujets[i].Initialised_at);
			state.stats.Sujets[i].Title = parseTitleFromUrl(state.stats.Sujets[i].Url);
		}

		state.stats.ReponseByYear = state.stats.ReponseByYear.map(function(x){
			return [x.Label, x.Nb];
		});

		state.stats.ReponseByLastMouth = state.stats.ReponseByLastMouth.map(function(x){
			return [x.Label, x.Nb];
		}).reverse();
	},
	setSelection: (state, vals) => {
		state.selection = vals;
		state.selection.Infos.Date_inscription = parseDate(state.selection.Infos.Date_inscription)

		for (var i = 0; i < state.selection.Similaires.length; i++) {
			state.selection.Similaires[i].Pourc = Math.round(state.selection.Similaires[i].Pourc);
		}

		for (var i = 0; i < state.selection.Sujets.length; i++) {
			state.selection.Sujets[i].Initialised_at = parseDate(state.selection.Sujets[i].Initialised_at);
			state.selection.Sujets[i].Title = parseTitleFromUrl(state.selection.Sujets[i].Url);
		}

		state.selection.SujetByYear = state.selection.SujetByYear.map(function(x){
			return [x.Label, x.Nb];
		});

		state.selection.SujetByLastMouth = state.selection.SujetByLastMouth.map(function(x){
			return [x.Label, x.Nb];
		});

		state.selection.AnalyseTextuel = state.selection.AnalyseTextuel.slice(0,30);

	    state.search.proposition = [];
	    state.map.zoom = (state.selection.Infos.Nb_messages > 10000) ? 4 : 5;
	    console.log("niveau zoom :", state.map.zoom);
	    state.map.x = state.selection.Infos.Coord_X;
	    state.map.y = state.selection.Infos.Coord_Y;
	},
	deleteSelection: (state) => {
	    state.selection = undefined;
	},
}
