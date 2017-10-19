import axios from 'axios'

export const searchByFragmentPseudo = ({ commit, getters }) => {
	var hasard = Math.floor(Math.random() * 5) + 1;
	var recherche = getters.searchCurrent;
	var items = [];

	if(recherche.length > 2)
	{
		var urlRecherche = "http://api.webcartes.fr/auteur/search/" + recherche;
		axios.get(urlRecherche)
			.then(function (response) {
				if(response.data.valide)
				{
					commit("setErrorAjax", false);
					commit("setSearchProposition", response.data.values);
				}				
			})
			.catch(function (error) {   
				commit("setErrorAjax", true);
				commit("setErrorLabel", "Service non disponible");  
			});  
	}
}


export const searchSelection  = ({ commit, getters }, val) => {
	var urlRecherche = "http://api.webcartes.fr/auteur/" + val;
	axios.get(urlRecherche)
		.then(function (response) {
			if(response.data.valide)
			{
				commit("setErrorAjax", false);
				commit("setSelection", response.data.values.data);
			}				
		})
		.catch(function (error) {   
			commit("setErrorAjax", true);
			commit("setErrorLabel", "Service non disponible"); 
		});  
}


export const searchStats  = ({ commit, getters }) => {
	var urlRecherche = "http://api.webcartes.fr/stats";
	axios.get(urlRecherche)
		.then(function (response) {
			if(response.data.valide)
			{
				commit("setErrorAjax", false);
				commit("setStats", response.data.values.data);
			}				
		})
		.catch(function (error) {   
			commit("setErrorAjax", true);
			commit("setErrorLabel", "Service non disponible");  
		});  
}


export const searchRandom  = ({ commit, dispatch }) => {
	var urlRecherche = "http://api.webcartes.fr/random";
	axios.get(urlRecherche)
		.then(function (response) {
			if(response.data.valide)
			{
				commit("setErrorAjax", false);
				dispatch('searchSelection', response.data.values.pseudo);
			}				
		})
		.catch(function (error) {   
			commit("setErrorAjax", true);
			commit("setErrorLabel", "Service non disponible"); 
		});  
}