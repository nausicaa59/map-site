<template>
    <div id="menu-general" v-if="this.getDisplayMenu()">
        <div class="opaque-layout" v-on:click="closeMenu()"></div>
        <div class="items">
            <div class="closebt" id="closeMenu" v-on:click="closeMenu()">
                <i class="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <div class="liste_menu">
                <ul>
                    <li>
                        <a href="" v-on:click="goMap()">
                            <i class="fa fa-map" aria-hidden="true"></i> La map
                        </a>
                    </li>
                    <li>
                        <a href="" v-on:click="goStat()">
                            <i class="fa fa-area-chart" aria-hidden="true"></i> Statistiques
                        </a>
                    </li>
                    <li>
                        <a href="" v-on:click="goTempsReel()">
                            <i class="fa fa-clock-o" aria-hidden="true"></i> Temps réel
                        </a>
                    </li>
                    <li>
                        <a href="" v-on:click="goApropos()">
                            <i class="fa fa-info-circle" aria-hidden="true"></i> A propos
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'menu-general',
    methods : {
        ...mapMutations("menu", [
            "setDisplayMenu"
        ]),
        ...mapGetters("menu", [
            "getDisplayMenu",
        ]),
        goMap : function(){
            this.$router.push({ name: 'index'});
        },
        goStat : function(){
            this.$router.push({ name: 'pseudo-stats'});
        },
        goTempsReel : function(){
            this.$router.push({ name: 'temps-reel'});
        },
        goApropos : function(){
            this.$router.push({ name: 'a-propos'});
        },
        closeMenu: function(e) {
            this.setDisplayMenu(false);
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

    #menu-general
    {
        width:100%;
        height: 100%;
        position: fixed;
        top:0px;
        left:0px;
        z-index: 1500;
        padding:0px;
        
        .opaque-layout
        {
            position:absolute;
            width: 100%;
            height: 100%;
            top:0px;
            left: 0px;
            background-color: black;
            opacity: 0.6;
        }

        .items
        {
            position:absolute;
            width: 350px;
            height: 100%;
            background-color: @bleu_fonce;
            padding:10px 0px;   

            .closebt
            {
                text-align: right;
                padding:0px 25px;

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

            .liste_menu
            {
                padding-top: 50px;

                ul
                {
                    margin:0px;
                    padding:0px;
                    list-style: none;

                    li
                    {
                        display: block;
                        font-size: 20px;
                        border-bottom: 2px solid @bleu_clair;

                        a
                        {
                            padding:25px 25px;
                            display: block;
                            color:white;
                            text-decoration: none;

                            i
                            {
                                padding-right: 10px;
                            }
                        }

                        &:hover
                        {
                            background-color: @orange;
                        }
                    }

                    li:last-child
                    {
                        border-bottom: 0px;
                    }
                }
            }       
        }
    }


    @media (min-width: 0px) and (max-width: 750px) {
        #menu-general
        {
            .items
            {
                position:absolute;
                width: 100%;

                .liste_menu
                {
                    padding-top: 10px;
                }
            }
        } 
    }
</style>
