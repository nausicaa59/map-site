<template>
  <div id="app">
    <barre-action-general></barre-action-general>
    <menu-general></menu-general>
    <pseudo-details></pseudo-details>
    <map-forum></map-forum>
  </div>
</template>

<script>
import MapForum from './components/Mapforum'
import MenuGeneral from './components/MenuGeneral'
import BarreActionGeneral from './components/BarreActionGeneral'
import PseudoDetails from './components/PseudoDetails'



export default {
  name: 'app',
  components: {
    MapForum,
    MenuGeneral,
    BarreActionGeneral,
    PseudoDetails
  }
}

</script>

<style  lang="less">
#app, html, body {
  height: 100%;
  width: 100%;
  padding:0px;
  margin:0px;
  background-color: white;
  font-size: 16px;
}
</style>
