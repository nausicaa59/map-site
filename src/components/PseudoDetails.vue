<template>
    <div id="pseudo-details" v-if="this.displaySelection()">
        <div class="items">
            <div class="closebt" id="closeMenu" v-on:click="close()">
                <i class="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <div class="infos">
                <div class="row section-info">
                    <div class="col-md-4 col-3 avatar">
                        <img src="https://unsplash.it/200/200">
                    </div>
                    <div class="col-md-8 col-9 details">
                        <span class="pseudo">{{this.selection().pseudo}}</span>
                        <br><span class="badge badge-primary">Msg : {{this.selection().nb_messages}}</span>
                        <span class="badge badge-primary">Sujets : {{this.selection().nb_messages}}</span> 
                        <br>Crée le : {{this.selection().date_inscription}}
                    </div>
                </div>
                <div class="row section-info cloud-tag">
                    <div class="col-md-12 col-12">
                        <div class="label">Nuage de mots :</div>
                        <div class="cloud">
                            <ul>
                                <li>Paris (15)</li>
                                <li>Je (5)</li>
                                <li>Fille (3)</li>
                                <li>Macron (2)</li>
                                <li>Musique (1)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row section-info pseudo-similaire">
                    <div class="col-md-12 col-12">
                        <div class="label">Pseudo similaire :</div>
                        <div class="row item"  v-for="similaire in this.selection().similaires">
                            <div class="col-md-3 col-4">
                                <img :src="similaire.img_lien">                           
                            </div>
                            <div class="col-md-5 col-6">
                                {{similaire.pseudo}}                            
                            </div>
                            <div class="col-md-4 col-2">
                                {{similaire.pourc}}                            
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
        close: function(e) {
            this.setDisplaySelection(false);
        },
        scrollHanle(evt) {
          console.log("scrool",evt)
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
            padding:150px 22px 10px 22px;
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
                    padding-bottom:30px;
                    border-bottom:2px solid @bleu_clair;
                }

                .avatar img
                {
                    width: 100%;
                }

                .details
                {
                    color:white;
                    font-size: 16px;

                    .pseudo
                    {
                        font-size: 20px;
                        font-weight: bold;
                    }

                    .badge
                    {
                        background-color: #d1d1d1;
                        color:#222;
                        padding:5px 10px;
                    }
                }

                .cloud-tag, .pseudo-similaire
                {
                    .label
                    {
                        padding-top: 30px;
                        color:white; 
                        padding-bottom:10px; 
                        margin:0px;
                        font-size: 16px;
                        font-weight: bold;                     
                    }

                    .item
                    {
                        color:#f1f1f1;
                        text-align: left;
                        font-size: 16px;
                    }
                }

                .cloud-tag
                {
                    ul
                    {
                        list-style: none;
                        margin: 0px;
                        padding: 0px;

                        li
                        {
                            display: inline-block;
                            background-color: @bleu_clair;
                            color:#f1f1f1;
                            padding:5px;
                            margin: 5px;
                            font-size: 16px;
                        }
                    }
                }

                .pseudo-similaire
                {
                    .item
                    {
                        padding-bottom: 10px;

                        img
                        {
                            width: 100%;
                        }
                    }
                }
            }       
        }
    }


    @media (min-width: 0px) and (max-width: 750px) {
        #pseudo-details
        {
            width:100%;
            height: 100px;
            position:fixed;
            top:auto;
            bottom:0px;
            

            .items
            {
                padding:10px 20px 10px 20px;
                width: 100%;
                height:100px;
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
