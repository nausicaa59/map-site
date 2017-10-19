export default {
	mapZoom				:	state => state.map.zoom,
	mapX 				:	state => state.map.x,
	mapY 				:	state => state.map.y,
	searchCurrent 		:	state => state.search.current,
	searchProposition	:	state => state.search.proposition,
	selection			:	state => state.selection,
	stats				:	state => state.stats,
	displaySelection	:	state => state.displaySelection,
	errorAjax			:	state => state.errorAjax,
	errorLabel			:	state => state.errorLabel,
}