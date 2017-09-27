<template>
    <div id="pseudo-details" v-if="this.displaySelection()">
        <div class="items">
            <div class="infos" v-if="this.selection() != undefined">
                <div class="row section-info">
                    <div class="col-md-4 col-3 avatar">
                        <img :src="this.selection().img_lien">
                    </div>
                    <div class="col-md-8 col-9 details">
                        <span class="pseudo">{{this.selection().pseudo}}</span>
                        <br><span class="badge badge-primary">Msg : {{this.selection().nb_messages}}</span>
                        <span class="badge badge-primary">Sujets : {{this.selection().nb_messages}}</span> 
                        <br><br>Crée le : {{this.selection().date_inscription}}
                    </div>
                </div>
                <div class="section-plus">
                    <h2 v-on:click="goStat()"><i class="fa fa-area-chart" aria-hidden="true"></i>Voir les statistiques</h2>
                </div>
                <div class="section-plus">
                    <h2><i class="fa fa-user" aria-hidden="true"></i>Voir les pseudos similaires</h2>
                </div>
                <div class="section-plus">
                    <h2><i class="fa fa-random" aria-hidden="true"></i>Voir un pseudo au hasard</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'


export default {
    name: 'pseudo-details',
    data() {
        return {
            settings: {
                maxScrollbarLength: 20,
                theme: 'my-theme-name'
            },
        }
    },
    methods : {
        ...mapMutations("map", [
            "setDisplaySelection"
        ]),
        ...mapGetters("map", [
            "selection",
            "displaySelection",
        ]),
        goStat : function(){
            this.$router.push({ name: 'statpseudo'});
        }
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
        overflow: hidden;

        
        .closebt
        {
            position:absolute;
            right:20px;
            top:10px;
            text-align: right;

            i
            {
                color:white;
                opacity: 0.75;
                font-size: 30px;
                cursor: pointer;

                &:hover
                {
                    opacity:1;
                }
            }
        }

        .items
        {
            position:absolute;
            width: 100%;
            height: 100%;
            background-color: @bleu_fonce;
            padding:170px 22px 10px 22px;
            overflow-y: auto;


            &::-webkit-scrollbar-track
            {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: @bleu_tres_fonce;
            }

            &::-webkit-scrollbar
            {
                width: 10px;
                background-color: @bleu_tres_fonce;
            }

            &::-webkit-scrollbar-thumb
            {
                background-color: @bleu_clair;
                border: 2px solid @bleu_tres_fonce;
            }



            .row
            {
                margin:0px;
            } 

            .infos
            {
                padding-top: 30px;

                .section-info
                {
                    padding-bottom:60px;
                    border-bottom:2px solid @bleu_clair;
                }

                .section-plus
                {
                    h2
                    {
                        display: block;
                        font-size: 20px;
                        border-bottom: 2px solid @bleu_clair;
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

                .avatar
                {
                    padding-left: 0px;

                    img
                    {
                        width: 100%;
                    }                    
                }

                .details
                {
                    color:white;
                    font-size: 16px;

                    .pseudo
                    {
                        font-size: 23px;
                        font-weight: bold;
                    }

                    .badge
                    {
                        background-color: #535362;
                        color:white;
                        padding:5px 10px;
                    }
                }
            }
        }
    }


    @media (min-width: 0px) and (max-width: 750px) {
        #pseudo-details
        {
            width:100%;
            height: 140px;
            position:fixed;
            top:auto;
            bottom:0px;
            

            .items
            {
                padding:20px 20px 10px 20px;
                width: 100%;
                height:100%;
                overflow-y: hidden;

                .infos 
                {
                    padding-top:0px;

                    .avatar img
                    {
                        padding-top:15px;                    }
                }


                .liste_menu
                {
                    padding-top: 10px;
                }
            }

            .closebt
            {
                z-index: 1005;
            }
        } 
    }
</style>
