<template>
    <div id="statistique-pseudo-section">
        <barre-action-general></barre-action-general>
        <menu-general></menu-general>
        <pseudo-details pageCurrent="stats"></pseudo-details>
        <div class="layout">
            <div class="stats_graph" v-if="this.selection() != undefined">
                <h3>Nb. sujets / année</h3>
                <div class="stat_content">
                    <vue-chart
                        chart-type="BarChart"
                        :columns="columns.sujets"
                        :rows="this.selection().SujetByYear"
                        :options="optionsBarre"
                    ></vue-chart>
                </div>
            </div>
            <div class="stats_graph" v-if="this.selection() != undefined">
                <h3>Nb. sujets / 12 derniers mois</h3>
                <div class="stat_content">
                    <vue-chart
                        chart-type="BarChart"
                        :columns="columns.sujets"
                        :rows="this.selection().SujetByLastMouth"
                        :options="optionsBarre"
                    ></vue-chart>
                </div>
            </div>
            <div class="stats_tabl" v-if="this.selection() != undefined">
                <h3>Mots les plus souvent employer dans les titres de sujets (top 30)</h3>
                <div class="stat_content listeWord">
                    <ul>
                        <li v-for="occurence in this.selection().AnalyseTextuel">
                            <div>{{ occurence.Word }} <span>({{ occurence.Nb }})</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="stats_tabl" v-if="this.selection() != undefined">
                <h3>Liste des sujets créer</h3>
                <div class="stat_content">
                    <table class="table">
                        <thead>
                            <th>Date</th>
                            <th>Sujets</th>
                            <th>Nb réponse</th>
                        </thead>
                        <tbody>
                            <tr v-for="sujet in this.selection().Sujets">
                                <td>{{sujet.Initialised_at}}</td>
                                <td class="sujetTitle"><a :href="sujet.Url" target="_blank">{{sujet.Title}}</a></td>
                                <td>{{sujet.Nb_reponses}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="stats_graph chiffrecle" v-if="this.selection() == undefined  && this.stats() != undefined">
                <div class="row">
                    <div class="col-md-3 col-12 chiffre">
                        <span>{{this.stats().NbPseudo}}</span><br>Pseudos
                    </div>
                    <div class="col-md-3 col-12 chiffre">
                        <span>{{this.stats().NbSujet}}</span><br>Sujets créer
                    </div>
                    <div class="col-md-3 col-12 chiffre">
                        <span>{{this.stats().NbReponse}}</span><br>Reponses
                    </div>
                    <div class="col-md-3 col-12 chiffre">
                        <span>{{this.stats().NbRepSujet}}</span><br>Réponses / sujet
                    </div>
                </div>
            </div>
            <div class="stats_graph" v-if="this.selection() == undefined  && this.stats() != undefined">
                <h3>Nombre de réponse par années</h3>
                <div class="stat_content">
                    <vue-chart
                        chart-type="LineChart"
                        :columns="columns.reponses"
                        :rows="this.stats().ReponseByYear"
                        :options="optionsLine"
                    ></vue-chart>
                </div>
            </div>
            <div class="stats_graph" v-if="this.selection() == undefined  && this.stats() != undefined">
                <h3>Nombre de réponse pour les 12 derniers mois</h3>
                <div class="stat_content">
                    <vue-chart
                        chart-type="LineChart"
                        :columns="columns.reponses"
                        :rows="this.stats().ReponseByLastMouth"
                        :options="optionsLine"
                    ></vue-chart>
                </div>
            </div>
            <div class="stats_tabl" v-if="this.selection() == undefined && this.stats() != undefined">
                <h3>Mots les plus souvent employer dans les titres de sujets (TOP100)</h3>
                <div class="stat_content listeWord">
                    <ul>
                        <li v-for="occurence in this.stats().AnalyseTextuel">
                            <div>{{ occurence.Word }} <span>({{ occurence.Nb }})</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="stats_tabl" v-if="this.selection() == undefined && this.stats() != undefined">
                <h3>Liste des 30 sujets les plus populaires</h3>
                <div class="stat_content">
                    <table class="table">
                        <thead>
                            <th>Date</th>
                            <th>Sujets</th>
                            <th>Nb réponse</th>
                        </thead>
                        <tbody>
                            <tr v-for="sujet in this.stats().Sujets">
                                <td>{{sujet.Initialised_at}}</td>
                                <td class="sujetTitle"><a :href="sujet.Url" target="_blank">{{sujet.Title}}</a></td>
                                <td>{{sujet.Nb_reponses}}</td>
                            </tr>
                        </tbody>
                    </table>
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
    name: 'statistique-pseudo-section',
      data () {
        return {
            columns: {
                sujets : [
                    {'type': 'string','label': 'Year'}, 
                    {'type': 'number','label': 'Sujets crées'}
                ],
                reponses : [
                    {'type': 'string','label': 'Year'}, 
                    {'type': 'number','label': 'Nombre de réponses'}
                ]
            },
            series: [
                ["2017",125000],
                ["2016",105000],
                ["2015",95000],
                ["2014",85000],
                ["2013",55000],
                ["2012",45000]
            ],
            optionsLine: {
                width: "100%", height: 500,
                chartArea: {width: '80%', height: '60%'},
                legend: {position: 'top'},
                titlePosition: 'in', axisTitlesPosition: 'in',
                hAxis: {
                    showTextEvery: '1', 
                    textPosition: 'out', 
                    slantedTextAngle: 90, 
                    direction: -1, 
                    slantedText: true
                }, 
                vAxis: {textPosition: 'out'}
            },
            optionsBarre: {
                width: "100%", height: 500,
                chartArea: {width: '80%', height: '75%'},
                legend: {position: 'top'},
                titlePosition: 'in', axisTitlesPosition: 'in',
                hAxis: {
                    showTextEvery: '1', 
                    textPosition: 'out'
                }, 
                vAxis: {textPosition: 'out'}
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
            "stats"
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
            background-color: #F4F4F4;
            padding:30px 80px;


            .stats_graph, .stats_tabl
            {
                margin-bottom: 100px;
                background-color: white;
                border-bottom: 2px solid #d1d1d1;

                &.chiffrecle 
                {
                    text-align: center;

                    .row
                    {
                        margin:0px;
                        
                        .chiffre
                        {
                            padding:25px;
                            background-color:@orange;
                            color:white;

                            &:nth-child(2n){
                                background-color: @bleu_clair;
                            }

                            span
                            {
                                font-size: 28px;
                            }
                        }
                    }
                }

                .stat_content
                {
                    padding:0px 15px 15px 15px;
                }

                h3
                {
                    font-size: 18px;
                    background-color: @bleu_clair;
                    display: block;
                    padding: 15px 10px;
                    margin-bottom: 20px;
                    color:white;
                    font-weight: bold;
                }
            }

            .stats_graph
            {
                h3 
                {
                    margin-bottom: 0px;
                }

                .stat_content
                {
                    height: 500px;
                }
            }

            .stats_tabl
            {
                .listeWord
                {
                    ul
                    {
                        li
                        {
                            display: inline-block;
                            margin-right :20px;
                            margin-bottom: 20px;

                            div
                            {
                                padding:5px 10px;
                                background-color: #f1f1f1;
                                font-size: 20px;
                                text-transform: uppercase;
                                color:black;

                                span
                                {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }

                table
                {
                    width: 100%;                    

                    th
                    {
                        border:0px;
                        border-bottom: 2px solid #333;
                    }

                    td
                    {
                        border-bottom:1px solid #d1d1d1;

                    }

                    td, th
                    {                        
                        padding:10px 50px;
                    }

                    .sujetTitle
                    {
                        width: 70%;
                    }
                }                
            }
        }
    }

    @media (min-width: 0px) and (max-width: 1030px) {
        #statistique-pseudo-section
        {
            .layout
            {
                margin:0px 0px 0px 0px;
                min-height: 1200px;
                background-color: #F4F4F4;
                padding:130px 15px 180px 15px;

                .stats_tabl
                {
                    .listeWord
                    {
                        ul
                        {
                            margin:0px;
                            padding:0px 0px 0px 15px;

                            li
                            {
                                margin-right :10px;
                                margin-bottom: 10px;

                                div
                                {
                                    padding:5px 10px;
                                    font-size: 14px;

                                    span
                                    {
                                        font-size: 10px;
                                    }
                                }
                            }
                        }
                    }

                    table
                    {
                        width: 100%;
                        margin-bottom: 50px;

                        td, th
                        {
                            padding:10px 10px;
                            font-size: 13px;
                        }
                    }
                }

                .stats_graph, .stats_tabl
                {
                    .stat_content
                    {
                        padding:15px 0px;
                    }

                    h3
                    {
                        font-size: 16px;
                    }
                }

            }
        }
    }
</style>
