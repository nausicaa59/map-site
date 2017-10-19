<template>
    <header>
        <div class="titre">
            La carte du <span>forum</span>
        </div>
        <div class="input-group actions-bar">
          <span class="input-group-btn" id="menuBtn" v-on:click="openMenu()">
            <button class="btn btn-secondary" type="button"><i class="fa fa-bars" aria-hidden="true"></i></button>
          </span>
          <input type="text" class="form-control" placeholder="Rechercher un pseudo..." name="searchPseudo" v-model="searchText">
          <div class="deleteSearch" v-if="this.searchCurrent().length > 0" v-on:click="cleanSearch()">
              <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div class="alert alert-danger errorAjax" v-if="errorAjax() == true">
          {{errorLabel()}}
        </div>
        <div class="layoutpseudo" v-if="this.searchProposition().length > 0">
            <div class="item" v-for="proposition in this.searchProposition()">
                <div class="row" v-on:click="selection(proposition.pseudo)">
                    <div class="col-md-5 col-7 pseudo">
                        {{proposition.pseudo}}
                    </div>
                    <div class="col-md-5 col-3 infos">
                        <span>
                            <i class="fa fa-commenting-o" aria-hidden="true"></i>: {{proposition.nb_messages}}
                        </span>
                    </div>
                    <div class="col-md-2 col-2 next">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>                            
                    </div>
                </div>                   
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'barre-action-general',
    methods : {
        ...mapActions("map",[
            "searchByFragmentPseudo",
            "searchSelection"
        ]),
        ...mapMutations("menu", [
            "setDisplayMenu"            
        ]),
        ...mapMutations("map", [
            "setSearchCurrent",
            "setSearchProposition",
            "setSelection",
            "deleteSelection"
        ]),
        ...mapGetters("map", [
            "searchProposition",
            "searchCurrent",
            "errorAjax",
            "errorLabel"
        ]),
        openMenu: function(e) {
            this.setDisplayMenu(true);
        },
        cleanSearch: function(e) {
            this.setSearchCurrent("");
            this.setSearchProposition([]);
            this.deleteSelection()
        },
        selection: function(val) {
            console.log(val);
            this.searchSelection(val);
        }
    },
    computed: {
        searchText: {
            get () {
                return this.searchCurrent();
            },
            set (value) {
                this.setSearchCurrent(value);
                this.searchByFragmentPseudo();
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @orange:#FF4000;
    @bleu_fonce:#004365;
    @bleu_tres_fonce:#023b5a;

    header
    {
        width:450px;
        position: fixed;
        top:30px;
        left:20px;
        z-index: 1000;
        padding:0px;

        .errorAjax
        {
            margin-top:15px;
        }

        .titre
        {
            color:white;
            font-family: "Audiowide";
            font-size: 30px;
            background-color: transparent;

            span
            {
                color: @orange;
            }
        }

        .actions-bar
        {
            input, input:focus
            {
                border-top: 2px solid @bleu_fonce;
                border-right: 2px solid @bleu_fonce;
                border-bottom: 2px solid @bleu_fonce;
                border-left: 0px solid @bleu_fonce;
                border-left:0px;
                border-radius: 0;
            }


            #menuBtn
            {
                background-color: transparent;
                border-bottom: 0;

                button
                {
                    color:white;
                    background-color: @orange;
                    padding:10px 20px;
                    font-size: 30px;
                    cursor: pointer;
                    border-top: 2px solid @bleu_fonce;
                    border-right: 0px solid @bleu_fonce;
                    border-bottom: 2px solid @bleu_fonce;
                    border-left: 2px solid @bleu_fonce;
                    border-radius: 0px;             
                }               
            }

            .deleteSearch
            {
                position: absolute;
                bottom:0px;
                right:0px;
                color:red;
                background-color: transparent;
                z-index: 1600;
                height: 100%;
                padding:15px 25px 0px 25px;
                font-size: 20px;
                cursor: pointer;
            }
        }

        .layoutpseudo
        {
            margin-top: 0px;
            max-height: 600px;
            overflow-y: auto;
            border-top: 0px solid @bleu_fonce;
            border-right: 2px solid @bleu_fonce;
            border-bottom: 2px solid @bleu_fonce;
            border-left: 2px solid @bleu_fonce;

            .item
            {
                margin: 0px 0px 0px 0px;
                padding: 0px;
                background-color: white;
                position:relative;
                border-bottom: 1px solid #d1d1d1;
                cursor:pointer;
                color:#333; 

                .row
                {
                    padding: 15px;
                    margin:0px;
                }

                &:hover
                {
                    background-color: #f1f1f1;
                }   

                .pseudo
                {
                    text-align: left;
                }

                .infos
                {
                    text-align: left;
                }
                

                .next   
                {
                    text-align: right;
                }
            }
        }           
    }


    @media (min-width: 0px) and (max-width: 1030px) {
        header
        {
            width:100%;
            top:0px;
            left:0px;
            background-color: transparent;

            .titre
            {
                font-size: 20px;
                text-align: center;
                padding: 5px 0px;
                width:100%;
                background-color: @bleu_fonce;
            }

            .actions-bar
            {
                input
                {
                    border:0px;
                    border-radius: 0;
                    border-right: 1px solid white;
                }

                #searchSubmit
                {
                    button
                    {
                        border:0px;
                    }
                }

                #menuBtn
                {
                    border:0px;

                    button
                    {
                        border:0px;
                        border-radius: 0;
                    }
                }
            }

            .layoutpseudo
            {
                width:100%;
                margin:0px 0px 0px 0px;
                background-color: white;
                border-bottom:0px solid #d1d1d1;
                border-left:0px solid #d1d1d1;
                border-right:0px solid #d1d1d1;
                border-top:2px solid #d1d1d1;

                .item
                {
                    .infos span
                    {
                        display: none;
                    }
                }                
            }           
        }
    }
</style>
