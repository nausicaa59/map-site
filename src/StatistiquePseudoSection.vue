<template>
    <div id="statistique-pseudo-section">
        <barre-action-general></barre-action-general>
        <menu-general></menu-general>
        <pseudo-details></pseudo-details>
        <div class="layout">
            gggggg
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
    components: {
        BarreActionGeneral,
        MenuGeneral,
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
        this.setDisplaySelection(true);
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
                padding:150px 30px;
            }
        }
    }
</style>
