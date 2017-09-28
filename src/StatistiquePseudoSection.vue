<template>
    <div id="statistique-pseudo-section">
        <barre-action-general></barre-action-general>
        <menu-general></menu-general>
        <pseudo-details pageCurrent="stats"></pseudo-details>
        <div class="layout">
            <chartist  v-if="this.selection() != undefined"
                ratio="ct-major-second"
                type="Bar"
                :data="chartData"
                :options="chartOptions" >
            </chartist>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import BarreActionGeneral from './components/BarreActionGeneral'
import MenuGeneral from './components/MenuGeneral'
import PseudoDetails from './components/PseudoDetails'

export default {
    name: 'statistique-pseudo-section',
      data () {
        return {
            chartData: {
                labels: ["A", "B", "C", "A", "B", "C"],
                series:[[10, 3, 20, 14, 16, 5]]
            },
            chartOptions: {
                lineSmooth: false,
                width: "100%",
                height: 300
            }
        }
      },
    components: {
        BarreActionGeneral,
        MenuGeneral,
        PseudoDetails
    },
    methods : {
        ...mapGetters("map", [
            "selection",
        ]),
    },
    mounted() {

    }
}
</script>

<style lang="less">
    @orange:#FF4000;
    @bleu_fonce:#004365;
    @bleu_tres_fonce:#023b5a;
    @bleu_clair:#145f87;

    #statistique-pseudo-section
    {
        background-color: @bleu_fonce;

        .layout
        {
            margin:0px 0px 0px 500px;
            min-height: 2500px;
            background-color: #F4F4F4;
            padding:30px;
        }
    }

    @media (min-width: 0px) and (max-width: 750px) {
        #statistique-pseudo-section
        {
            .layout
            {
                margin:0px 0px 0px 0px;
                min-height: 2500px;
                background-color: #F4F4F4;
                padding:150px 5px 150px 5px;
            }
        }
    }
</style>
