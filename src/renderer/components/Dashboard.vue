<template>
    <div id="wrapper">
        <h2>Dashboard</h2>
        <hr class="hr" />
        <div class="Dashboard">
            <div class="Dashboard__panel">
                <div class="Panel__value">100 <span class="Panel__unit">°C</span></div>
                <div class="Panel__description">Chamber Avg. Temp.</div>
                <div class="Panel__stats">Sources: 14</div>
            </div>
            <div class="Dashboard__panel">
                <div class="Panel__value">121 <span class="Panel__unit">°C</span></div>
                <div class="Panel__description">Gas Avg. Temp.</div>
                <div class="Panel__stats">Sources: 3</div>
            </div>
            <div class="Dashboard__panel">
                <div class="Panel__value">1.1 <span class="Panel__unit">E-2 Torr</span></div>
                <div class="Panel__description">Chamber Pressure</div>
                <div class="Panel__stats">Sources: 1</div>
            </div>
            <div class="Dashboard__panel">
                <strong>SiO2 v2 Static</strong> in progress.<br />
                <div class="Panel__description">MLD.F02</div>
                <div class="Panel__stats"><div style="border-left: 2px solid #76eac5; padding-left: 0.5em; margin-bottom: 4px">Precursor A: 1,2-bis(hydroxymethyl)-o-carborane</div><div style="border-left: 2px solid #ce3838; padding-left: 0.5em">Plasma A: Nitrogen</div></div> 
            </div>
            <div class="Dashboard__graph">
                <h4>Growth Step</h4>
                <chartist
                    type="Line"
                    :data="growthChartData"
                    :options="growthChartOptions" >
                </chartist>
            </div>
            <div class="Dashboard__graph Dashboard__graph--normal">
                <h4>Temperature (C)</h4>
                <chartist
                    type="Line"
                    :data="tempChartData"
                    :options="tempChartOptions" >
                </chartist>
            </div>
            <div class="Dashboard__graph Dashboard__graph--normal">
                <h4>Pressure (Torr)</h4>
                <chartist
                    type="Line"
                    :data="pressChartData"
                    :options="pressChartOptions" >
                </chartist>
            </div>
        </div>
    </div>
</template>

<style lang="sass">

    .hr
        display: block
        height: 1px
        border: 0
        border-top: 1px solid rgba(255,255,255,.1)
        margin: 1em 0
        padding: 0

    .Dashboard
        display: grid
        grid-template: 1fr / 1fr 1fr 1fr 2fr
        grid-gap: 2em

        &__panel
            border-radius: 5px
            padding: 1em
            background-color: rgba(68, 70, 79, 0.5)

        &__graph
            grid-column: span 4

            .ct-grids line
              stroke: rgba(255, 255, 255, 0.2)

            .ct-labels span
              color: rgba(255, 255, 255, 0.2)

            .ct-series-a
                .ct-line
                    stroke: #76eac5
                    stroke-width: 2px
                .ct-area
                    fill: #76eac5

            .ct-series-b
                .ct-line
                    stroke: #ce3838
                    stroke-width: 2px
                .ct-area
                    fill: #ce3838


            .ct-series-c
                .ct-line
                    stroke: #6d80d4
                    stroke-width: 2px
                .ct-area
                    fill: none

            .ct-series-d 
                .ct-line
                    stroke: #fdb64f
                    stroke-width: 2px
                .ct-area
                    fill: none

            .ct-series-e
                .ct-line
                    stroke: #fdb64f
                    stroke-width: 2px
                .ct-area
                    fill: none

            &--normal
                .ct-series-a
                    .ct-line
                        stroke: #f6a821
                        stroke-width: 2px
                    .ct-area
                        fill: #76eac5



    .Panel

        &__value
            color: white
            font-weight: bold
            font-size: 1.75em

        &__unit
            font-weight: normal
            font-size: .75em

        &__description
            color: rgba(255,255,255,.5)
            font-size: .75em

        &__stats
            font-size: .75em
            margin-top: 1em
</style>

<script>

    export default {
        name: 'dashboard',
        data() {
            return {
                value: 0,
                tempChartData: {
                    labels: ['Start', '', '', 'Cycle 1', '', '', '', '', 'Cycle 2', '', '', '', '', 'Cycle 3', ''],
                    series: [
                        [99.81,96.79,99.84,98.02,99.23,99.68,96.61,96.63,95.8,96.93,99.58,98.72,99.22,99.32,96.73]
                    ]
                },
                tempChartOptions: {
                    high: 150,
                    low: 20,
                    stretch: true,
                    lineSmooth: false,
                    showPoint: false,
                },
                pressChartData: {
                    labels: ['Start', '', '', 'Cycle 1', '', '', '', '', 'Cycle 2', '', '', '', '', 'Cycle 3', ''],
                    series: [
                        [0.00,0.00,0.00,0.001,0.012,0.0,0.038,0.04,0.00,0.01,0.0,0.038,0.04, 0, 0.01]
                    ]
                },
                pressChartOptions: {
                    high: 0.05,
                    low: 0,
                    stretch: true,
                    lineSmooth: true,
                    showPoint: false,
                },
                growthChartData: {
                    labels: ['Start', '', '', 'Cycle 1', '', '', '', '', 'Cycle 2', '', '', '', '', 'Cycle 3', ''],
                    series:[
                        [, , , 1.05, 1.05, null, null, null, 1.05, 1.05, null, null, null, 1.05, 1.05],
                        [, , , , , , 1.05, 1.05, null, null, null, 1.05, 1.05],
                        [, , , , , 0.95, 0.95, null, null, null, 0.95, 0.95],
                        [0.95, 0.95, 0.95, 0.95, null, null, null, 0.95, 0.95, null, null, null],
                        [null, null, null, null, 0.95, 0.95, null, null, null, 0.95, 0.95, null, 0.95, 0.95]
                    ]
                },
                growthChartOptions: {
                    high: 1.5,
                    low: 0.5,
                    stretch: true,
                    lineSmooth: false,
                    showArea: true,
                    showPoint: false,
                    axisY: {
                        // onlyInteger: true,
                        showLabel: false,
                        showGrid: false
                    }
                }
            }
        },

        methods: {
            poll() {
                const Readline = this.$serial.parsers.Readline;
                const port = new this.$serial('COM4', {
                    baudRate: 9600,
                });
                const parser = new Readline();
                port.pipe(parser);
                parser.on('data', console.log);
            }
        }
    }

</script>