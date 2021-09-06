import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import { Link } from 'react-router-dom';
HighchartsMore(Highcharts);

export const HistoryScreen = () => {

    let historial = JSON.parse(sessionStorage.getItem('historial'))||{};
    let similitud1 = {}
    let similitud2 = {}

    if (Object.keys(historial).length !== 0) {



        let seriesData = [];
        let seriesData2 = [];
        for (let i = 0; i < historial.length; i++) {
            let x = historial[i]['titulo_original'];
            let y = historial[i]['similitud'];

            let x2 = historial[i]['titulo_predicho'];
            let y2 = historial[i]['similitud 2'];

            seriesData.push([x, y]);
            seriesData2.push([x2, y2]);
        }



        similitud1 = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'History of Similarity of Recommendations Vs. Original Titles'
            },

            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Similarity '
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
            },

            series: [
                {

                    colorByPoint: true,
                    data: seriesData
                }
            ],
        };
        similitud2 = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'History of Similarity of Recommendations Vs. Original Titles'
            },

            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Similarity '
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
            },

            series: [
                {

                    colorByPoint: true,
                    data: seriesData2
                }
            ],
        };

    }

    return (
        <div>
            {
                (Object.keys(historial).length === 0) ?
                    (
                        <div>
                            <h1>no hay datos</h1>
                            <h1>no hay datos</h1>
                            <h1>no hay datos</h1>
                            <h1>no hay datos</h1>
                            <h1>no hay datos</h1>
                        </div>
                    ) :
                    (
                        <div className="contenedor__historial">
                            <div className="tabs">
                                <input type="radio" id="tab1" name="tab-control" defaultChecked />
                                <input type="radio" id="tab2" name="tab-control" />

                                <ul>
                                    <li title="Features"><label htmlFor="tab1" role="button"><span>Similarity Jaccard with Semantics</span></label></li>
                                    <li title="Delivery Contents"><label htmlFor="tab2" role="button"><span>Similarity Jaccard without Semantics</span></label>
                                    </li>

                                </ul>
                                <div className="slider" id="tab-dos">
                                    <div className="indicator"></div>
                                </div>
                                <div className="content">
                                    <section>
                                        <div id="Frecuencia">
                                            <figure className="highcharts-figure">

                                                <div>

                                                    <HighchartsReact highcharts={Highcharts} options={similitud2} />
                                                </div>
                                            </figure>
                                        </div>
                                    </section>
                                    <section>
                                        <div id="Polaridad">
                                            <figure className="highcharts-figure">
                                                <div>
                                                    <HighchartsReact highcharts={Highcharts} options={similitud1} />
                                                </div>
                                            </figure>
                                        </div>
                                    </section>

                                </div>
                            </div>


                            <div id="container-historial">
                                <div className="contenedor-centrar">
                                    <Link className="btn-primario a-btn" to="/" role="button">TRY ANOTHER SONG</Link>
                                </div>
                                <div className="contenedor-centrar">
                                    <Link className="btn-secundario a-btn" to="/results" role="button">RETURN TO THE PREVIOUS PAGE
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
            }

        </div>

    )

}
