import _ from 'lodash'

export const searchByFragmentPseudo = ({ commit, getters }) => {
	var hasard = Math.floor(Math.random() * 5) + 1;
	var recherche = getters.searchCurrent;
	var items = [];

	for(var i = 0; i<hasard; i++)
	{
		items.push({
			"id" : i,
			"pseudo" : "Nausicaa" +i,
			"nb_messages" : i*10000,
			"pseudo" : "Nausicaa" + i,
			"img_lien" : "Nausicaa" + i,
			"nb_relation" : "Nausicaa" + i,
			"banni" : "Nausicaa" + i,
			"date_inscription" : "Nausicaa" + i,
			"coord_X" : 1200 + i*10,
			"coord_Y" : 1000 + i,
		});
	}

	if(recherche.length > 3)
	{
		commit("setSearchProposition", items);
	}
	else
	{
		commit("setSearchProposition",[]);
	}
}
