<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'App',
    data () {
        return {
        }
    },
    components: {
    },
    computed : {
    },
    created() {
        this.searchStats();
    },
    methods : {
        ...mapActions("map", [
            "searchStats",
        ]),
    }
}
</script>

<style lang="less">
#app, html, body
{
    min-height: 100%;
}
</style>