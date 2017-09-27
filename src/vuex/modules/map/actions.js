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
			"img_lien" : "https://unsplash.it/200/20" + i,
			"nb_relation" : "Nausicaa" + i,
			"banni" : "Nausicaa" + i,
			"date_inscription" : "2017-01-01",
			"coord_X" : 1200 + i*10,
			"coord_Y" : 1000 + i,
			"similaires" : [
				{"pseudo" : "Nausicaa61", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa59", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/201"},
				{"pseudo" : "Nausicaa58", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/202"},
				{"pseudo" : "Nausicaa57", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/203"},
				{"pseudo" : "Nausicaa56", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/204"},
				{"pseudo" : "Nausicaa51", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/205"},
				{"pseudo" : "_Nausicaa_", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa61", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa61", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa59", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa58", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa57", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa56", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa51", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa61", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa59", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/201"},
				{"pseudo" : "Nausicaa58", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/202"},
				{"pseudo" : "Nausicaa57", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/203"},
				{"pseudo" : "Nausicaa56", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/204"},
				{"pseudo" : "Nausicaa51", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/205"},
				{"pseudo" : "_Nausicaa_", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa61", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa61", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa59", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa58", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa57", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa56", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
				{"pseudo" : "Nausicaa51", "id": 1450, "pourc": 0.99, "img_lien" : "https://unsplash.it/200/200"},
			]
		});
	}

	if(recherche.length > 2)
	{
		commit("setSearchProposition", items);
	}
	else
	{
		commit("setSearchProposition",[]);
	}
}
