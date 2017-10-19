<template>
    <div id="pseudo-similaire-section">
        <barre-action-general></barre-action-general>
        <menu-general></menu-general>
        <pseudo-details pageCurrent="similaire"></pseudo-details>
        <div class="layout">
            <div class="contenair_pseudos" v-if="this.selection() != undefined">
                <div class="row">
                    <div class="col-md-4 col-12 proposition" v-for="pseudoItem in this.selection().Similaires" v-on:click="select(pseudoItem.Pseudo)">
                        <div class="pseudoName">{{ pseudoItem.Pseudo }}</div>
                        <div class="row">
                            <div class="col-md-4 col-4 infoAvatar">
                                <img :src="pseudoItem.Img_lien">
                            </div>
                            <div class="col-md-8 col-8">
                                <div class="infoComplentaire">
                                    <div class="messages" title="Nombre de réponse créer par le pseudo">
                                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                        {{pseudoItem.Nb_messages}}
                                    </div>
                                    <div class="status" v-if="pseudoItem.Banni == 0">
                                        <i class="fa fa-check-circle" aria-hidden="true"></i>                        
                                        Le pseudo est actif
                                    </div>
                                    <div class="status ban" v-if="pseudoItem.Banni == 1">
                                        <i class="fa fa-ban" aria-hidden="true"></i>                        
                                        Le pseudo est banni
                                    </div>                                   
                                    <div class="tauxSimilitude" title="">
                                        <span v-bind:class="rangeOfSimilitude(pseudoItem.Pourc)">
                                            Similaire à {{pseudoItem.Pourc}}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nofound" v-if="this.selection().Similaires.length == 0">
                    <div class="notification">
                        Oups !
                        <br>Les pseudos similaires n'ont pas encore été calculés pour ce pseudo
                    </div>
                    <div class="workprogress">
                        <i class="fa fa-meh-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="contenair_pseudos top30" v-if="(this.selection() == undefined && this.stats() != undefined) || (this.selection() != undefined && this.selection().Similaires.length == 0)">
                <div class="row">
                    <div class="col-12 eliteTitle">
                        <h2>L'élite de la nation (top 30)</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-12 proposition" v-for="pseudoItem in this.stats().Auteurs" v-on:click="select(pseudoItem.Pseudo)">
                        <div class="pseudoName">{{ pseudoItem.Pseudo }}</div>
                        <div class="row">
                            <div class="col-md-4 col-4 infoAvatar">
                                <img :src="pseudoItem.Img_lien">
                            </div>
                            <div class="col-md-8 col-8">
                                <div class="infoComplentaire">
                                    <div class="messages" title="Nombre de réponse créer par le pseudo">
                                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                        {{pseudoItem.Nb_messages}}
                                    </div>
                                    <div class="status" v-if="pseudoItem.Banni == 0">
                                        <i class="fa fa-check-circle" aria-hidden="true"></i>                        
                                        Le pseudo est actif
                                    </div>
                                    <div class="status ban" v-if="pseudoItem.Banni == 1">
                                        <i class="fa fa-ban" aria-hidden="true"></i>                        
                                        Le pseudo est banni
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    name: 'pseudo-similaire-section',
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
        ...mapGetters("map", [
            "selection",
            "stats",
        ]),
        ...mapActions("map",[
            "searchSelection"
        ]),
        rangeOfSimilitude: function(pourc) {
            return {
              'higth': (pourc >= 80),
              'medium': (pourc < 80) && (pourc >= 50),
              'low': (pourc < 50)
            }
        },
        select: function(val) {
            this.searchSelection(val);
        }
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

    #pseudo-similaire-section
    {
        background-color: @bleu_fonce;

        .layout
        {
            margin:0px 0px 0px 500px;
            background-color: #F4F4F4;
            padding:30px;

            .contenair_pseudos
            {
                &.top30
                {
                    h2
                    {
                        padding-top : 60px;
                        padding-bottom: 60px;
                        text-align: center;
                    }
                }

                .nofound
                {
                    min-height: 100%;
                    padding-top: 50px;
                    padding-bottom: 100px;

                    .notification
                    {
                        font-size: 30px;
                        text-align: center;
                        color:#d9534f;
                    }

                    .workprogress
                    {
                        width: 100%;
                        text-align: center;
                        font-size: 190px;
                        color:#d9534f;
                    }
                }

                .proposition
                {
                    margin-bottom: 50px;

                    .pseudoName
                    {
                        cursor: pointer;
                        margin-right: 50px;
                        padding:10px 5px;
                        border-bottom:2px solid @bleu_fonce;
                        font-size: 20px;
                        font-weight: bold;
                        color: #333;
                    }

                    img
                    {
                        cursor: pointer;
                        width: 150px;
                        border-bottom:2px solid @bleu_fonce;
                        border-left:2px solid @bleu_fonce;
                        border-right:2px solid @bleu_fonce;                        
                    }

                    .infoComplentaire
                    {
                        padding:20px;
                        font-size: 18px;

                        .tauxSimilitude
                        {
                            font-size: 18px;
                            font-weight: bold;

                            .higth
                            {
                                color:green;
                            }

                            .medium
                            {
                                color:orange;
                            }

                            .low
                            {
                                color:#d1d1d1;
                            }
                        }

                        .status
                        {

                        }
                    }
                }
            }
        }
    }

    @media (min-width: 0px) and (max-width: 1030px) {
        #pseudo-similaire-section
        {
            .layout
            {
                margin:0px 0px 0px 0px;
                min-height: 2500px;
                background-color: #F4F4F4;
                padding:110px 20px 180px 20px;

                .contenair_pseudos
                {
                    row
                    {
                        margin:0px;
                    }

                    .nofound
                    {
                        .notification
                        {
                            font-size: 18px;
                            text-align: center;
                            color:#d9534f;
                        }

                        .workprogress
                        {
                            width: 100%;
                            text-align: center;
                            font-size: 90px;
                            color:#d9534f;
                        }
                    }

                    .proposition
                    {
                        .pseudoName
                        {
                            margin:0px;
                        }

                        img
                        {
                            width: 100%;
                        }

                        .infoComplentaire
                        {
                            padding: 15px 0px 0px 0px;
                        }
                    }
                }
            }
        }
    }
</style>
