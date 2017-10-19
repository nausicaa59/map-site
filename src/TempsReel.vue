<template>
    <div id="temps-reel-section">
        <barre-action-general></barre-action-general>
        <menu-general></menu-general>
        <pseudo-details pageCurrent="stats"></pseudo-details>
        <div class="layout">
            <div class="notification">
                Oups !
                <br>La section est en court de construction et sera bientôt disponible...
            </div>
            <div class="workprogress">
                <i class="fa fa-meh-o" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import BarreActionGeneral from './components/BarreActionGeneral'
import MenuGeneral from './components/MenuGeneral'
import PseudoDetails from './components/PseudoDetails'

export default {
    name: 'temps-reel',
      data () {
        return {
        }
      },
    components: {
        BarreActionGeneral,
        MenuGeneral,
        PseudoDetails
    },
    methods : {

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



    #temps-reel-section
    {
        background-color: @bleu_fonce;

        .layout
        {
            margin:0px 0px 0px 500px;
            background-color: #F4F4F4;
            padding:30px 80px;

            .notification
            {
                font-size: 30px;
                text-align: center;
                color:#d9534f;
                padding-top: 100px;
            }

            .workprogress
            {
                width: 100%;
                text-align: center;
                font-size: 190px;
                color:#d9534f;
                padding-bottom: 800px;
            }
        }
    }

    @media (min-width: 0px) and (max-width: 1030px) {
        #temps-reel-section
        {
            .layout
            {
                margin:0px 0px 0px 0px;
                min-height: 1200px;
                background-color: #F4F4F4;
                padding:80px 15px 180px 15px;
            }
        }
    }
</style>
