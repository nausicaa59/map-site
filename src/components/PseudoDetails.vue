<template>
    <div id="pseudo-details" v-if="this.selection() != undefined" v-bind:class="{ full: displayFullMobile }">
        <div class="section-info">
            <div class="pseudo">
                {{this.selection().Infos.Pseudo}}
            </div>
            <div class="avatar">
                <img :src="this.selection().Infos.Img_lien">
            </div>
            <div class="details">
                <ul>
                     <li class="messages" title="Nombre de réponse créer par le pseudo">
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                        {{this.selection().Infos.Nb_messages}}
                    </li>
                    <li class="sujets" title="Nombre de sujets créer par le pseudo">
                        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        {{this.selection().Sujets.length}}
                    </li>                    
                    <li class="inscription" title="Date d'inscription du pseudo">
                        <i class="fa fa-hourglass-start" aria-hidden="true"></i>                        
                        {{this.selection().Infos.Date_inscription}}
                    </li>
                    <li class="status" v-if="this.selection().Infos.Banni == 0">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>                        
                        Le pseudo est actif
                    </li>
                    <li class="status ban" v-if="this.selection().Infos.Banni == 1">
                        <i class="fa fa-ban" aria-hidden="true"></i>                        
                        Le pseudo est banni
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <div class="viewMobile" v-on:click="fullMobile()">
                <i class="fa fa-angle-up" aria-hidden="true" v-if="!displayFullMobile"></i>
                <i class="fa fa-angle-down" aria-hidden="true" v-if="displayFullMobile"></i>
            </div>
        </div>
        <div class="section-plus" v-if="pageCurrent != 'map'">
            <h2 v-on:click="goMap()"><i class="fa fa-map" aria-hidden="true"></i>Retour à la map</h2>
        </div>
        <div class="section-plus"  v-if="pageCurrent != 'stats'">
            <h2 v-on:click="goStat()"><i class="fa fa-area-chart" aria-hidden="true"></i>Statistiques</h2>
        </div>
        <div class="section-plus"  v-if="pageCurrent != 'similaire'">
            <h2 v-on:click="goSimilaire()"><i class="fa fa-user" aria-hidden="true"></i>Pseudos similaires</h2>
        </div>
        <div class="section-plus" v-on:click="random()">
            <h2><i class="fa fa-random" aria-hidden="true"></i>Pseudo au hasard</h2>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'


export default {
    name: 'pseudo-details',
    props: ["pageCurrent"],
    data() {
        return {
            displayFullMobile : false
        }
    },
    mounted() {
        this.displayFullMobile = false;
    },
    methods : {
        ...mapGetters("map", [
            "selection",
        ]),
        ...mapActions("map",[
            "searchRandom"
        ]),
        goStat : function(){
            this.$router.push({ name: 'pseudo-stats'});
        },
        goMap : function(){
            this.$router.push({ name: 'index'});
        },
        goSimilaire: function(){
            this.$router.push({ name: 'pseudo-similaire'});
        },
        fullMobile : function(){
            this.displayFullMobile = !this.displayFullMobile;
        },
        random : function(){
            console.log("random demander !");
            this.searchRandom();
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @orange:#FF4000;
    @bleu_fonce:#004365;
    @bleu_tres_fonce:#023b5a;
    @bleu_clair:#145f87;




    #pseudo-details
    {
        width:500px;
        height: 100%;
        position: fixed;
        top:0px;
        left:0px;
        z-index: 999;
        padding:0px;
        background-color: @bleu_fonce;
        padding:170px 0px 10px 0px;

        .section-info
        {
            padding:50px 25px 70px 25px;

            .viewMobile
            {
                display: none;
            }

            .pseudo
            {
                color:white;
                font-size: 28px;
                font-weight: bold;
                padding-bottom: 5px;
            }

            .avatar
            {
                width: 30%;
                float:left;

                img
                {
                    width: 100%;
                    border:2px solid @bleu_clair;
                }
            }

            .details
            {
                width: 70%;
                float:left;
                padding-left: 20px;
                border-top: 2px solid @bleu_clair;
                padding-top: 10px;

                ul
                {
                    margin:0px;
                    padding:0px;
                    list-style: none;

                    .pseudo
                    {
                        font-size: 24px;
                        color: white;
                        font-weight: bold;
                    }

                    .messages, .inscription, .sujets, .status
                    {
                        font-size: 22px;
                        color:white;

                        i
                        {
                            padding-right: 10px;
                            font-weight: normal;
                            color: #d2d2d2;
                        }
                    }

                    .status, .status i
                    {
                        color:#09b509;
                    }

                    .status.ban, .status.ban i
                    {
                        color:red;
                    }
                }                    
            }

            .clear
            {
                clear: both;
            }
        }

        .section-plus
        {
            border-bottom: 2px solid @bleu_clair;

            h2
            {
                display: block;
                font-size: 20px;
                
                width:100%;
                padding:25px 25px;
                display: block;
                color:white;
                text-decoration: none;
                cursor:pointer;
                margin:0px;

                i
                {
                    padding-right: 10px;
                }

                &:hover
                {
                    background-color: @bleu_clair;
                }    
            }
        }
    }


    @media (min-width: 0px) and (max-width: 1030px) {
        #pseudo-details
        {
            width:100%;
            height: 150px;
            position:fixed;
            top:auto;
            bottom:0px;
            padding: 5px;

            &.full
            {
                position:fixed;
                top:0px!important;
                bottom:0px;
                padding:0px;
                height:100%;
                z-index:1600;

                .section-info
                {
                    padding:45px 25px 45px 25px;

                    .viewMobile
                    {
                        position:fixed;
                        top:auto;
                        bottom:20px!important;
                        right: 0;
                        left: 0;
                        margin-left: auto;
                        margin-right: auto;
                        padding-top:4px;
                    }
                }

                .section-plus
                {
                    h2
                    {
                        font-size: 16px;
                    }
                }
            }

            .section-info
            {
                padding:8px 8px 60px 8px;
                position: relative;

                .viewMobile
                {
                    display: block;
                    position: absolute;
                    top:-40px;
                    right: 20px;
                    font-size: 40px;
                    color: white;
                    z-index: 1600;
                    padding:0px;
                    background-color: @bleu_clair;
                    border-radius: 100px;
                    width:70px;
                    height: 70px;
                    text-align: center;
                    font-weight: bold;
                }

                .pseudo
                {
                    font-size: 18px;
                }
                
                .avatar
                {

                }

                .details
                {
                    ul
                    {
                        .messages, .inscription, .sujets, .status
                        {
                            font-size: 14px;
                        }
                    }                    
                }
            }
        }
     }

    @media (min-width: 721px) and (max-width: 1030px) {
        #pseudo-details
        {
            height: 190px;

            .section-info
            {

                .pseudo
                {
                    font-size: 18px;
                }
                
                .avatar
                {
                    width:120px;
                    height: 120px;
                    overflow: hidden;

                    img
                    {
                        width: 120px;
                    }                    
                }

                .details
                {
                    ul
                    {
                        .messages, .inscription, .sujets, .status
                        {
                            font-size: 14px;
                        }
                    }                    
                }
            }
        }
    }
</style>
