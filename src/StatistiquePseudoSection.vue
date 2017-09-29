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
                        :columns="columns"
                        :rows="this.selection().sujetByYear"
                        :options="options"
                    ></vue-chart>
                </div>
            </div>
            <div class="stats_graph" v-if="this.selection() != undefined">
                <h3>Nb. sujets / 12 derniers mois d'activité</h3>
                <div class="stat_content">
                    <vue-chart
                        chart-type="BarChart"
                        :columns="columns"
                        :rows="this.selection().sujetByLastMouth"
                        :options="options"
                    ></vue-chart>
                </div>
            </div>
            <div class="stats_tabl" v-if="this.selection() != undefined">
                <h3>Analyse lexicales des sujets créer</h3>
                <div class="stat_content">
                    <table class="table">
                        <thead>
                            <th>Mots</th>
                            <th>Fréquence</th>
                            <th>%</th>
                        </thead>
                        <tbody>
                            <tr v-for="occurence in this.selection().analyseTextuel">
                                <td>{{occurence.name}}</td>
                                <td>{{occurence.nb}}</td>
                                <td>{{occurence.nb}}</td>
                            </tr>
                        </tbody>
                    </table>
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
                            <tr v-for="sujet in this.selection().sujets">
                                <td>{{sujet.date}}</td>
                                <td class="sujetTitle"><a href="">{{sujet.title}}</a></td>
                                <td>15</td>
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
            columns: [
                {'type': 'string','label': 'Year'}, 
                {'type': 'number','label': 'Topics créer'}
            ],
            options: {
                width: "100%", height: 500,
                chartArea: {width: '90%', height: '75%'},
                legend: {position: 'top'},
                titlePosition: 'in', axisTitlesPosition: 'in',
                hAxis: {showTextEvery: '1', textPosition: 'out'}, 
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
            min-height: 500px;
            padding:30px 80px;


            .stats_graph, .stats_tabl
            {
                margin-bottom: 100px;
                background-color: white;
                border-bottom: 2px solid #d1d1d1;

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

    @media (min-width: 0px) and (max-width: 750px) {
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
