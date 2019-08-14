<!-- Written by Stefan Wagner & Julian Stogsdill -->
<template>  
  <div class="grid">
    <head>
      <link rel="stylesheet" type="text/css" href="./webfonts/css/all.min.css"> //this imports the FontAwesome icon library//
    </head>

    <h3> Growth Recipe:</h3>
       
          <grid-layout
            :layout.sync="testLayout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            >
              <grid-item 
                :x=testLayout[0].x
                :y=testLayout[0].y
                :w=testLayout[0].w
                :h=testLayout[0].h
                :i=testLayout[0].i>
                <div class="vue-grid-item text">
                  System Conditions 
                <div class="tileButton Plus">
                  <a class="far fa-plus-square" href="#"></a>
                </div>
                </div>
                <div class="no-drag">Chamber Average: {{ hg_1.ta }}°C</div> <br>
                <div class="no-drag">Substrate Temp:  {{ hg_1.t14 }} °C</div> <br>
                <div class="no-drag">Amp. Left/Right:  {{ hg_1.t12 }}°C / {{ hg_1.t11 }}°C</div> <br>
                
              </grid-item>

              <grid-item 
                :x=testLayout[1].x
                :y=testLayout[1].y
                :w=testLayout[1].w
                :h=testLayout[1].h
                :i=testLayout[1].i>

                <div class="vue-grid-item text">
                  Pressure 
                  <div class="tileButton Plus">
                    <a class="far fa-plus-square" href="#"></a>
                  </div>
                </div>
                  <div class="no-drag">Ion Pressure: {{ionpressure}}</div> <br>
                  <div class="no-drag">Convectron 1 Pressure: {{convpressure1}}</div> <br>
                  <div class="no-drag">Convectron 2 Pressure: {{convpressure2}}</div> <br>
                
              </grid-item>

              <grid-item 
              :x=testLayout[2].x
              :y=testLayout[2].y
              :w=testLayout[2].w
              :h=testLayout[2].h
              :i=testLayout[2].i>
                  <div class="vue-grid-item text">
                    Ampoule Temps
                  <div class="tileButton Plus">
                    <a class="far fa-plus-square" href="#"></a>
                  </div>
                  </div>
                  <div class="no-drag">
                    Right:   <br>                                   <!-- which one is left/right? -->
      <input v-model.number="hg_1.h11" @change="onHeaterSetpointChange({i: 11, v: hg_1.h12})" type="number" value="200"> °C<br>
    <br>  Left:    <br>
      <input v-model.number="hg_1.h12" @change="onHeaterSetpointChange({i: 12, v: hg_1.h13})" type="number" value="200"> °C
                  </div>
              </grid-item>

              <grid-item 
                :x=testLayout[3].x
                :y=testLayout[3].y
                :w=testLayout[3].w
                :h=testLayout[3].h
                :i=testLayout[3].i>
               <div class="vue-grid-item text">
                  Plasma Settings
                <div class="tileButton Plus">
                  <a class="far fa-plus-square" href="#"></a>
                </div>
                </div>
              </grid-item>

        
          </grid-layout>
      <!---------------- Start Growth/Reset Button ------------->
    <div id="bottombuttons">
      <button id="resetbutton">Reset</button>
      <button id="startbutton">Start Growth</button>
    </div>
      
</div>
</template>

<!-----------------------------JAVASCRIPT ------------------------------------------------------------>
<script>
import VueGridLayout from 'vue-grid-layout'
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import {mapState} from 'vuex';

export default {
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem
	},
  // data() {
	// return {
	// 	testLayout : [
	// 		{"x":0,"y":0,"w":3,"h":4,"i":"0"},
	// 		{"x":3,"y":0,"w":3,"h":4,"i":"1"},
	// 		{"x":6,"y":0,"w":3,"h":4,"i":"2"},
	// 		{"x":9,"y":0,"w":3,"h":4,"i":"3"},
	// 		{"x":0,"y":4,"w":3,"h":4,"i":"4"},
	// 		{"x":3,"y":4,"w":3,"h":4,"i":"5"},
	// 		{"x":6,"y":4,"w":3,"h":4,"i":"6"},
	// 		{"x":9,"y":4,"w":3,"h":4,"i":"7"},
	// 		{"x":0,"y":8,"w":3,"h":4,"i":"8"},
	// 		{"x":3,"y":8,"w":3,"h":4,"i":"9"},
	// 		{"x":6,"y":8,"w":3,"h":4,"i":"10"},
	// 		{"x":9,"y":8,"w":3,"h":4,"i":"11"}
	// 	]
	// }
  // }
  computed : {
    testLayout (){
      return this.$store.state.testLayout
    },
    ...mapState({
        ald0: 'switches.ald0',
        ald1: 'switches.ald1',
        gate_valve: 'switches.gate_valve',
        purge: 'switches.purge',
        ion: 'switches.ion',
        xps: 'switches.xps',
        cryo: 'switches.cryo',
        conv: 'switches.conv',
        throttle: 'switches.throttle',
        evap: 'switches.evap',
        RF: 'switches.RF',
        Refresh: 'switches.Refresh'
      }),
      switches(){
        return this.$store.state.switches;
      },
      mfc0(){
        return this.$store.state.mfc0;
      },
      mfc1(){
        return this.$store.state.mfc1;
      },
      mfc2(){
        return this.$store.state.mfc2;
      },
      temps(){
        return this.$store.state.temps;
      },
      hg_1(){
        return this.$store.state.hg_1;
      },
      hg_2(){
        return this.$store.state.hg_2;
      },
      ionpressure(){
        return this.$store.state.ionpressure;
      },
      convpressure1(){
        return this.$store.state.convpressure1;
      },
      convpressure2(){
        return this.$store.state.convpressure2;
      },
      command(){
        return this.$store.state.command;
      },
      response(){
        return this.$store.state.response;
      },
      input(){
        return this.$store.state.input;
      },
      throttleSet(){
        return this.$store.state.throttleSet;
      },
      setpoint(){
        return this.$store.state.setpoint;
      },
      valvePos(){
        return this.$store.state.valvePos;
      },
      Fpower(){
        return this.$store.state.Fpower;
      },
      Rpower(){
        return this.$store.state.Rpower;
      },
      RFsetpoint(){
        return this.$store.state.RFsetpoint;
      },
      setpointRF(){
        return this.$store.state.setpointRF;
      },
      manopressure(){
        return this.$store.state.manopressure;
      },
      port(){
        return this.$store.state.port;
      },
      port2(){
        return this.$store.state.port2;
      },
      port3(){
        return this.$store.state.port3;
      },
      port4(){
        return this.$store.state.port4;
      },
      port5(){
        return this.$store.state.port5;
      },
      c(){
        return this.$store.state.c;
      },
      x(){
        return this.$store.state.x;
      },
      w(){
        return this.$store.state.w;
      },
    },
    methods: {
      onSwitchAld0(e){
        this.$store.dispatch('onSwitchAld0', e.target.checked)
        //this.$store.dispatch('write2', '<' + 6 + ',' + this.$store.state.switch.ald0 + ">")
      },
      onSwitchAld1(e){
        this.$store.dispatch('onSwitchAld1', e.target.checked)
      },
      onSwitchWelch(e){
        this.$store.dispatch('onSwitchWelch', e.target.checked)
      },
      onSwitchVent(e){
        this.$store.dispatch('onSwitchVent', e.target.checked)
      },
      onSwitchXps(e){
        this.$store.dispatch('onSwitchXps', e.target.checked)
      },
      onSwitchCryo(e){
        this.$store.dispatch('onSwitchCryo', e.target.checked)
      },
      onSwitchEvap(e){
        this.$store.dispatch('onSwitchEvap', e.target.checked)
      },
      onSwitchIon(e){
        this.$store.dispatch('onSwitchIon', e.target.checked)
      },
      onSwitchEvap(e){
        this.$store.dispatch('onSwitchEvap', e.target.checked)
      },
      onSwitchThrottle(e){
        this.$store.dispatch('onSwitchThrottle', e.target.checked)
      },
      onSwitchRF(e){
        this.$store.dispatch('onSwitchRF', e.target.checked)
      },
      ...mapActions([
        'onGroupChange',
        'onHeaterSetpointChange',
        'getIon',
        'getValvePos',
        'getSetpoint',
        'getFpower',
        'switchPower',
        'switchConv',
        'getConv',
        'getMano',
        'onCommandChange',
        'onSetpointChange',
        'onRFsetpointChange',
        'onMfcChange',
        'average',
      ])
    },
  }
  </script>
<!-----------------------------CSS/Sass Styling------------------------------------------------------------>
<style lang="scss">

.grid{
  height: 100%;
  width: 100%;
}
#content {
    width: 100%;
}

.vue-grid-layout {
    //background: #eee;
}

.layoutJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
}

.eventsJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
    height: 100px;
    overflow-y: scroll;
}

.columns {
    -moz-columns: 140px;
    -webkit-columns: 140px;
    columns: 120px;
}



/*.vue-resizable-handle {
    z-index: 5000;
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
}*/

.vue-grid-item:not(.vue-grid-placeholder) {
    background: rgba(68, 70, 79, 0.5);
    border-radius: 10px;
    //padding: 1em;
    //border: 1px solid black;
}

.vue-grid-item.resizing {
    opacity: 0.9;
}

.vue-grid-item.static {
    background: #cce;
}

.vue-grid-item .text {
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.2em;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    
}
//.no-drag is the label for content within each tile
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
    position: absolute;
    margin-top: 2.25em;
    margin-left: 0.5em;
    padding: 0.2em;
    font-size: 13px;

}

.vue-grid-item .minMax {
    font-size: 12px;
}

.vue-grid-item .add {
    cursor: pointer;
}

.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}

.tileButton {
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
  position: fixed;
  bottom: 1px;
  left: -10px;
}
.tileButton a {
  color: grey;
  text-decoration: none;
}
.tileButton:hover {
  cursor: pointer;
}
</style>

//this is the styling for the run/reset red/green buttons on bottom of the page//
<style lang="sass" scoped> 
    .RunButton
      	display: inline-block
      	border: none
      	color: #fff
      	text-decoration: none
      	background-color: #c48301
      	padding: 15px 35px
      	font-size: 8px
      	text-transform: uppercase
      	font-weight: 600
      	letter-spacing: 2px
      	border-radius: 13px
      	text-align: center
      	position: relative
      	outline: none
      	transition: background-color .1s ease
      	cursor: pointer
      	&::after
      		transition: red .2s ease
      		position: absolute
      		content: ''
      		height: 4px
      		bottom: 0
      		width: 100%
      		background-color: darken(red, 50%)
      		opacity: .18
      		border-bottom-left-radius: 2px
      		border-bottom-right-radius: 2px
      		left: 0
      	&:focus, &:hover
      		text-decoration: none
      		color: #fff
      	&:hover
      		background-color: lighten(#c48301, 5%)
      		&::after
      			opacity: .22
      	&:active
      		background-color: darken(red, 5%)
      		&::after
      			opacity: .32

    #startbutton
      background-color: green
      color: white
      padding: 10px 15px
      border-radius: 5px
      border-color: green

    #bottombuttons
      position: fixed
      bottom: .5em
      left: 1.3%
      margin-left: auto

    #resetbutton
      background-color: red
      color: white
      padding: 10px 20px
      border-radius: 5px
      border-color: red
      
  </style>
