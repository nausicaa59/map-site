<template>
  <div id="map-section">
    <barre-action-general></barre-action-general>
    <menu-general></menu-general>
    <pseudo-details></pseudo-details>
    <map-forum></map-forum>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MapForum from './components/Mapforum'
import MenuGeneral from './components/MenuGeneral'
import BarreActionGeneral from './components/BarreActionGeneral'
import PseudoDetails from './components/PseudoDetails'



export default {
  name: 'map-section',
  components: {
    MapForum,
    MenuGeneral,
    BarreActionGeneral,
    PseudoDetails
  },
  methods : {
      ...mapMutations("map", [
          "setDisplaySelection"
      ]),
      ...mapGetters("map", [
          "selection",
          "displaySelection",
      ]),
  },
  mounted() {
    if(this.displaySelection() && this.selection() == undefined)
    {
      this.setDisplaySelection(false);
    }    
  }
}

</script>

<style  lang="less">
html, body 
{
  height: 100%;
  width: 100%; 

  #app
  {
    height: 100%;
    width: 100%; 

    #map-section, {
      height: 100%;
      width: 100%;
      padding:0px;
      margin:0px;
      background-color: white;
      font-size: 16px;
    }
  }
}



</style>
