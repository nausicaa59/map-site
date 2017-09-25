<template>
  <div id="app">
    <barre-action-general></barre-action-general>
    <menu-general></menu-general>
    <map-forum></map-forum>
  </div>
</template>

<script>
import MapForum from './components/Mapforum'
import MenuGeneral from './components/MenuGeneral'
import BarreActionGeneral from './components/BarreActionGeneral'

export default {
  name: 'app',
  components: {
    MapForum,
    MenuGeneral,
    BarreActionGeneral
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
