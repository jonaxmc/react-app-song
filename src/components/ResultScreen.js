import React from 'react'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import wordCloud from "highcharts/modules/wordcloud.js";
import { Link } from 'react-router-dom';


wordCloud(Highcharts);

HighchartsMore(Highcharts);

export const ResultScreen = () => {

    const historial = JSON.parse(sessionStorage.getItem('datos')) || {}
    const { titulo_original, subtitle, titulo_predicho, image, lyrics, letraNube, palabras, res, sentimientos, pesos_topico } = historial
    // const { titulo_original, subtitle, titulo_predicho, image, lyrics,letraNube, palabras, res, sentimientos, pesos_topico  } = useSelector(state => state.data)
    // console.log(titulo_original, subtitle, titulo_predicho, image, lyrics, letraNube, palabras, res, sentimientos, pesos_topico)

    let pastel ={}
    let burbuja ={}
    let nube ={}
    if (Object.keys(historial).length !== 0) {


        let data = []
        let dataBurbuja = []
        let letra = letraNube.trim().split(' ')
        let dataLetra = []

        const repeticiones = {};
        letra.forEach((l) => {
            repeticiones[l] = (repeticiones[l] || 0) + 1;
        });

        for (let letra in repeticiones) {
            dataLetra.push({
                name: letra,
                weight: repeticiones[letra]
            })

        }





        for (let i = 0; i < palabras.length; i++) {
            data.push({
                name: palabras[i],
                y: res[i]
            });

            dataBurbuja.push({
                y: sentimientos[i]['compound'],
                z: res[i],
                name: palabras[i]
            })



        }




        pastel = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Tokens Frequency'
            },
            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'Frecuencia'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },

            series: [
                {

                    type: 'pie',
                    allowPointSelect: true,
                    keys: ['name', 'y', 'selected', 'sliced'],
                    data: data
                }
            ]
        }

        burbuja = {
            chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy'
            },

            legend: {
                enabled: false
            },

            title: {
                text: 'Polarity'
            },

            xAxis: {
                gridLineWidth: 1,

                categories: palabras,
                plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 65,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                    },

                }]
            },

            yAxis: {
                min: -1,
                max: 1,
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Polarity'
                },
                labels: {
                    format: '{value}'
                },
                maxPadding: 0.2,
                plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 50,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: 'Safe sugar intake 50g/day',
                        x: -10
                    },
                    zIndex: 3
                }],

            },

            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                    '<tr><th>Polarity:</th><td>{point.y}</td></tr>' +
                    '<tr><th>Frecuency:</th><td>{point.z}</td></tr>',
                footerFormat: '</table>',
                followPointer: true
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },

            series: [{
                data: dataBurbuja,
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, Highcharts.color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get('rgba')]
                        ]
                    }
                }
            }]
        }



        nube = {

            series: [{
                type: 'wordcloud',
                data: dataLetra,
                name: 'Occurrences'
            }],
            title: {
                text: 'Wordcloud of Lorem Ipsum'
            }
        }

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


                        <div>
                            <div className="contenedor-encabezado"></div>
                            <div className="data">
                                <div className="data-titulo">{titulo_original}</div>
                                <div className="data-subtitulo">{subtitle}</div>
                                <div className="data-tipoAPI">Retrieved from </div>
                            </div>
                            <div className="titulo-recomendado">Recommended Title: {titulo_predicho}</div>

                            <img className="caratula" src={image} alt={image} />
                            <div className="container-md contenedor-datos">
                                <div className="row">
                                    <h1 className="div-letra">Lyrics</h1>
                                    <div className="col-sm-5 col-md-6 letra">
                                        {
                                            lyrics.map((letra, i) => (
                                                <div key={i}>{letra}</div>)
                                            )
                                        }
                                    </div>
                                    <div className="col-sm-5 col-md-6">
                                        <div className="row">
                                        </div>
                                        <div className="row">

                                            <table className="table table-striped table-hover">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col">Recommended Tokens </th>
                                                        <th scope="col">Frequency </th>
                                                        <th scope="col">Polarity</th>
                                                        <th scope="col">LDA Weight</th>
                                                    </tr>
                                                </thead>


                                                <tbody>
                                                    {


                                                        palabras.map((_, i) => (
                                                            <tr key={i}>
                                                                <td >{palabras[i]}</td>
                                                                <td >{res[i]}</td>
                                                                <td >{sentimientos[i]['compound']}</td>
                                                                <td >{pesos_topico[i]}</td>
                                                            </tr>
                                                        ))
                                                    }


                                                </tbody>
                                            </table>

                                            <div className="tabs">
                                                <input type="radio" id="tab1" name="tab-control" defaultChecked />
                                                <input type="radio" id="tab2" name="tab-control" />
                                                <input type="radio" id="tab3" name="tab-control" />
                                                <ul>
                                                    <li title="Features"><label htmlFor="tab1" role="button"><span>Frequency</span></label></li>
                                                    <li title="Delivery Contents"><label htmlFor="tab2" role="button"><span>Polarity</span></label>
                                                    </li>
                                                    <li title="Delivery Contents"><label htmlFor="tab3" role="button"><span>Word
                                                        Cloud</span></label></li>
                                                </ul>
                                                <div className="slider">
                                                    <div className="indicator"></div>
                                                </div>
                                                <div className="content">
                                                    <section>
                                                        <div id="Frecuencia">
                                                            <figure className="highcharts-figure">

                                                                <div id="tabla-hi-frecuencia">
                                                                    <HighchartsReact highcharts={Highcharts} options={pastel} />
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </section>
                                                    <section>
                                                        <div id="Polaridad">
                                                            <figure className="highcharts-figure">
                                                                <div id="tabla-hi">
                                                                    <HighchartsReact highcharts={Highcharts} options={burbuja} />
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </section>
                                                    <section>
                                                        <div id="Nube">
                                                            <figure className="highcharts-figure">
                                                                <div id="tabla-nube">
                                                                    <HighchartsReact highcharts={Highcharts} options={nube} />
                                                                </div>

                                                            </figure>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>

                                        </div>










                                    </div>
                                </div>

                            </div>

                            <div className="contenedor-centrar">
                                <Link className="btn-primario a-btn" to="/" role="button">TRY ANOTHER SONG </Link>
                            </div>
                        </div>

                    )
            }



        </div >
    )
}
