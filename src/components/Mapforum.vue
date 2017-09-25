<template>
  <div id="map_canvas"></div>
</template>

<script>
export default {
  name: 'map-forum',
  data () {
    return {
      map: null,
      imageMap: null
    }
  },
  mounted() {
    var EuclideanProjection = function () {
        var EUCLIDEAN_RANGE = 256;
        this.pixelOrigin = new google.maps.Point(EUCLIDEAN_RANGE / 2, EUCLIDEAN_RANGE / 2);
        this.pixelsPerLonDegree = EUCLIDEAN_RANGE / 360;
        this.pixelsPerLonRadian = EUCLIDEAN_RANGE / (2 * Math.PI);
    };

    EuclideanProjection.prototype = {
        pixelOrigin: new google.maps.Point(0, 0),
        pixelsPerLonDegree: 0,
        pixelsPerLonRadian: 0,
        latScale: 2,
        lngScale: 2,

        fromLatLngToPoint: function (latLng, opt_point) {
            var point = opt_point || new google.maps.Point(0, 0);
            point.x = this.pixelOrigin.x + latLng.lng() * this.lngScale * this.pixelsPerLonDegree;
            point.y = this.pixelOrigin.y + (-1 * latLng.lat()) * this.latScale * this.pixelsPerLonDegree;
            return point;
        },

        fromPointToLatLng: function (point) {
            var lng = (point.x - this.pixelOrigin.x) / this.pixelsPerLonDegree,
                lat = -1 * (point.y - this.pixelOrigin.y) / this.pixelsPerLonDegree;

            return new google.maps.LatLng(lat / this.latScale, lng / this.lngScale, true);
        }
    };

    var imageOptions = {
        getTileUrl: function (coord, zoom) {
          console.log(zoom);
            return "http://map.dev/build/assets/" + "output/" + zoom + '/' + coord.y + '/' + coord.y + "-" + coord.x + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        isPng: true
    }

    this.imageMap = new google.maps.ImageMapType(imageOptions);
    this.imageMap.projection = new EuclideanProjection();
    this.imageMap.name = "webmap";
    this.imageMap.minZoom = 0;
    this.imageMap.maxZoom = 14;

   var mapOptions = {
        zoom: 0,
        streetViewControl: false,
        panControl: false,
        center: new google.maps.LatLng(0, 0),
        mapTypeControlOptions: {
            mapTypeIds: []
        },
        backgroundColor: 'black'
    };

    this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    this.map.mapTypes.set('webmap', this.imageMap);
    this.map.setMapTypeId('webmap');
    this.map.setCenter(this.imageMap.projection.fromPointToLatLng({x:1001,y:805.5}));
  },
  watch : {
    center : function (value) {
      var val = parseInt(value)
      this.map.setCenter(this.imageMap.projection.fromPointToLatLng({x:val,y:805.5}));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map_canvas {
    height:100%;
    width:100%;
    background-color:black;
  }
</style>
