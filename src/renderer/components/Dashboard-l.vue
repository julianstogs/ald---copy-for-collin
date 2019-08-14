<template>
    <div id="wrapper">
        <main class="main">

            <div class="Dashboard__Summaries">

                <div class="Dashboard__Summary">
                    <div class="Dashboard__Summary-Info">
                        Temperatures
                    </div>
                    <div class="Dashboard__Summary-Chart">
                        <chartist
                                type="Line"
                                id="temp-chart"
                                :data="tempChartData"
                                :options="tempChartOptions" >
                        </chartist>
                    </div>
                </div>

                <div class="Dashboard__Summary">
                    <div class="Dashboard__Summary-Info">
                        Gas Flow
                    </div>
                    <div class="Dashboard__Summary-Chart">
                        <chartist
                                type="Line"
                                id="temp-chart"
                                :data="tempChartData"
                                :options="tempChartOptions" >
                        </chartist>
                    </div>
                </div>

                <div class="Dashboard__Summary">
                    <div class="Dashboard__Summary-Info">
                        Pressure
                    </div>
                    <div class="Dashboard__Summary-Chart">
                        <chartist
                                type="Line"
                                id="temp-chart"
                                :data="tempChartData"
                                :options="tempChartOptions" >
                        </chartist>
                    </div>
                </div>
            </div>

            <div class="Dashboard__Focus">
                <chartist
                        style="height: 100%"
                        type="Line"
                        :data="chartData"
                        :options="chartOptions" >
                </chartist>
            </div>

            <div class="Dashboard__Process">
                <h4>Growth in Progress</h4>
                <div class="Dashboard__Process-Steps">
                    <div class="Dashboard__Process-Step">Temp</div>
                    <div class="Dashboard__Process-Step">Temp</div>
                    <div class="Dashboard__Process-Step">Temp</div>
                </div>
                <div class="Dashboard__Process-Summary">
                    test
                </div>
            </div>

        </main>
        <div class="side">
            <div class="mfc">
                <h3>MFC Control</h3>
                <p>MFC 1 <input type="number"> sccm | Actual: 0</p>
                <p>MFC 2 <input type="number"> sccm | Actual: 0</p>
                <input type="submit">
            </div>
            <div class="heater">
                <h3>Heater Control</h3>
                <p>Zone 1 <input type="number"> C | Actual: 0 C</p>
                <p>Zone 2 <input type="number"> C | Actual: 0 C</p>
                <p>Zone 3 <input type="number"> C | Actual: 0 C</p>
                <p>Zone 4 <input type="number"> C | Actual: 0 C</p>
                <p>Zone 5 <input type="number"> C | Actual: 0 C</p>
                <p>Zone 6 <input type="number"> C | Actual: 0 C</p>
                <p>Zone 7 <input type="number"> C | Actual: 0 C</p>
                <input type="submit">
            </div>
        </div>

    </div>
</template>

<style lang="sass">
    #wrapper
        flex-grow: 1
        display: grid
        grid-template-columns: auto 300px
        /*grid-template-rows: 200px auto*/
        grid-template-areas: "main side"
        height: 100vh

    .main
        display: grid
        grid-template: 1fr 4fr 2fr / 1fr

    .side
        grid-template: 1fr / 1fr
        padding-right: 1em
        overflow-y: scroll

    input
        background: #47484b
        outline: 0
        border: 0
        font-size: 1em
        color: white
        padding: .5em

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button
        -webkit-appearance: none
        -moz-appearance: none
        appearance: none
        margin: 0

    .Dashboard__Summaries
        display: grid
        height: 50px
        grid-template: 1fr / 1fr 1fr 1fr

    .Dashboard__Summary
        display: grid
        grid-template: 1fr / 1fr 3fr
        grid-template-areas: "info chart"

    .Dashboard__Summary-Info
        grid-area: info
        display: flex
        align-items: center
        justify-content: center

    .Dashboard__Summary-Chart
        grid-area: chart
        display: flex
        align-items: center
        justify-content: center

    .Dashboard__Process
        display: grid
        grid-template: 1fr / 4fr 1fr
        grid-template-areas: "title title" ""

    .ct-line
        stroke: limegreen
        stroke-width: 2px
        /*stroke-dasharray: 10px 20px*/

    #temp-chart .ct-line
        stroke: limegreen
        /*stroke-width: 5px !important*/

</style>

<script>
//    import SerialPort from 'serialport'
    import serial from "serialport"

    export default {
        name: 'dashboard',
        data() {
            return {
                tempChartData: {
                    labels: ["A", "B", "C"],
                    series:[[1, 3, 2], [4, 6, 5], [1.2, 3.3, 1]]
                },
                tempChartOptions: {
                    showPoint: false,
                    lineSmooth: true,
                    showLabel: false,
                    axisX: {
                        showGrid: false,
                        showLabel: false,
                        offset: 0
                    },
                    axisY: {
                        showGrid: false,
                        showLabel: false,
                        offset: 0
                    },
                    chartPadding: 10,
                    height: 70,
                },
                chartData: {
                    labels: ["A", "B", "C"],
                    series:[[1, 3, 2, 5], [4, 6, 5, 4], [1.2, 3.3, 1, 1]]
                },
                chartOptions: {
                    axisX: {
//                        showGrid: false,
//                        showLabel: false,
                        offset: 0
                    },
                    axisY: {
//                        showGrid: false,
//                        showLabel: false,
                        offset: 0
                    },
                },
            }
        },

        methods: {
            serial() {
                let SerialPort = require('serialport');
                let port = new SerialPort('/dev/tty-usbserial1', {
                    baudRate: 57600
                });

                port.on('data', function (data) {
                    console.log('Data:', data);
                });
            }
        }
//        components: { SystemInformation },
//        methods: {
//            open (link) {
//                this.$electron.shell.openExternal(link)
//            },
//            connect () {
//              const port = new SerialPort('dev/tty-usbserial1')
//            }
//        }
    }
</script>

<style>

</style>
