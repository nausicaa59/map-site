<template>
    <div id="pseudo-details" v-if="this.displaySelection()">
        <div class="items">
            <div class="closebt" id="closeMenu" v-on:click="close()">
                <i class="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <div class="infos">
                <div class="row">
                    <div class="col-md-4 col-4 avatar">
                        <img src="https://unsplash.it/200/200">
                    </div>
                    <div class="col-md-8 col-8 pseudo">Pseudo</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'pseudo-details',
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
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @orange:#FF4000;
    @bleu_fonce:#004365;
    @bleu_tres_fonce:#023b5a;

    #pseudo-details
    {
        width:100%;
        height: 100%;
        position: fixed;
        top:0px;
        left:0px;
        z-index: 999;
        padding:0px;
        
        .closebt
        {
            position:absolute;
            right:0px;
            top:10px;
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

        .items
        {
            position:absolute;
            width: 350px;
            height: 100%;
            background-color: @bleu_fonce;
            padding:200px 20px 10px 20px;   

            .infos
            {
                .avatar img
                {
                    width: 100%;
                }

                .pseudo
                {
                    color:white;
                }
            }       
        }
    }


    @media (min-width: 0px) and (max-width: 750px) {
        #pseudo-details
        {
            .items
            {
                padding:10px 20px 10px 20px;
                position:absolute;
                width: 100%;
                height:100px;
                bottom:0px;

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
