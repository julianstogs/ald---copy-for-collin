<!-- Written By Julian Stogsdill & Stefan Wagner -->
<template>
    <div id="wrapper">
    <h2 style="color: #f6a821;">System</h2>
    <hr class="hr" /> 
    <link rel="stylesheet" href="./fontawesome/css/all.css" type="text/css">
    <link rel="stylesheet" href="./fontawesome/css/fontawesome.css" type="text/css">
<!-------- Grid Settings ----------------------------------------------------------->
      <div class="grid">
          <grid-layout
            :layout.sync="displayGrid"
            :col-num="4"
            :row-height="125"
            :is-draggable="false"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[50, 10]"
            :use-css-transforms="true">
<!---------------------------First Grid Starts Here(System Info - NONdraggable)------------------------------------------>
<!--              For grid items, place content within <grid-item> tags                  -->
    <grid-item
      :x=displayGrid[0].x
      :y=displayGrid[0].y
      :w=displayGrid[0].w
      :h=displayGrid[0].h
      :i=displayGrid[0].i>

      <center><div class="Panel__name">Zone Temps</div></center>
      <div class="Panel__stats">Chamber: {{ hg_1.tc }} °C</div>
      <div class="Panel__stats">Lines: {{ hg_1.tl }} °C</div>
      <div class="Panel__stats">Ampule left: {{ hg_1.t12 }} °C</div>
      <div class="Panel__stats">Ampule right: {{ hg_1.t11 }} °C</div>
      <div class="Panel__stats">Showerhead: {{ hg_1.t13 }} °C</div>
      <div class="Panel__stats">Substrate: {{ hg_1.t14 }} °C</div>
    </grid-item>
<!---------------------------------------------------------------------------------------->
    <grid-item
      :x=displayGrid[1].x
      :y=displayGrid[1].y
      :w=displayGrid[1].w
      :h=displayGrid[1].h
      :i=displayGrid[1].i>

      <center><div class="Panel__name">Pressure</div></center>   <br>
      <div class="Panel__stats">Ion Pressure: {{ionpressure}}</div>
      <div class="Panel__stats">Convectron 1 Pressure: {{convpressure1}}</div>
    </grid-item>
<!---------------------------------------------------------------------------------------->
    <grid-item
      :x=displayGrid[2].x
      :y=displayGrid[2].y
      :w=displayGrid[2].w
      :h=displayGrid[2].h
      :i=displayGrid[2].i>

      <center><div class="Panel__name">System Info</div></center>
      <div class="Panel__setpoint"></div>
      <div class="Panel__stats">      </div>
    </grid-item>
<!---------------------------------------------------------------------------------------->
    <grid-item
      :x=displayGrid[3].x
      :y=displayGrid[3].y
      :w=displayGrid[3].w
      :h=displayGrid[3].h
      :i=displayGrid[3].i>

      <center><div class="Panel__name">System Info</div></center>
      <div class="Panel__setpoint"> </div>
      <div class="Panel__stats"> </div>
    </grid-item>
  </grid-layout>
</div>
<!-----------------------Second Grid Starts Here (Draggable Steps)--------------------------------------------------------->
<h2 style="color: #f6a821;">Steps</h2>
<hr class="hr" />
    <grid-layout
      :layout.sync="stepsGrid"
      :col-num="8"
      :row-height="75"
      :is-draggable="true"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[50, 50]"
      :use-css-transforms="true">
<!---------------------------------------------------------------------------------------->
    <grid-item
      v-for="(step, index) in stepsGrid" 
      v-bind:index="index" 
      v-bind:key= "step.uuid"
      
      :x="step.x"
      :y="step.y"
      :w="step.w"
      :h="step.h"
      :i="step.i"
      :uuid="step.uuid"
      :isDraggable="step.isDraggable">
                
      <div class="Panel__name">Step: {{index}}<div class="Panel__stepcount"> Loop Count: <input type="number" value="1">
      </div>
      </div>
      <div class="editButton">
        <router-link to="/Parameters-template" class="editButton">Edit</router-link>
      </div><br>
      <div class="Panel__status">Status:</div>
      <div class="trashcan" @click="removeStep(step)">
        <i class="far fa-trash-alt" style="color:#f6a821;"></i>
      </div>
      

    </grid-item>
  </grid-layout>

<!-------------------------------------------------------------------------------------------------------------------------->
<!------------------------------------- Start Growth/Reset Button -------------------------------->
  <div id="bottombuttons">
    <button id="resetbutton" @click="uuidv1()">Remove</button>
    <button id="startbutton" @click="onClickaddStep()">New Step</button>
  </div>
</div>
</template>
<!-------------------------JAVASCRIPT----------------------------------------------------->


<script>
import VueGridLayout from 'vue-grid-layout'
import uuid from 'uuid'
import {mapActions} from 'vuex';

export default {
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem
	},
  computed: {
    stepsGrid(){
      return this.$store.state.stepsGrid;
    },
    stepID(){
      return this.$store.state.stepID
    },
    displayGrid(){
      return this.$store.state.displayGrid
    },
    hg_1(){
      return this.$store.state.hg_1
    },
    ionpressure(){
      return this.$store.state.ionpressure;
    },
    convpressure1(){
      return this.$store.state.convpressure1;
    },
     substepsGrid(){
      return this.$store.state.substepsGrid
    },
  },
  
  methods: {
    ...mapActions([
      'onHeaterSetpointChange',
      'onClick',
      'getIon',
      'getConv',
      'average',
      
    ]),
    // removeStep(){
    //   this.$store.dispatch('removeStep');
    // },
    // removeStep(step){
    //   this.stepsGrid.splice(this.stepsGrid.indexOf(step), 1);
    // },
    removeStep(step){
      const index = this.stepsGrid.indexOf(step);
      if (index >= 0) this.stepsGrid.splice(index, 1);
    },
    onClickaddStep(){
      this.$store.dispatch('onClickaddStep');
    },
    uuidv1(){
      const uuidv1 = require('uuid/v1');
      uuidv1();
      console.log(uuidv1());
    }
  }
}
</script>

<!-------------------------CSS/SASS Styling--------------------------------------------------------------->
<style lang="scss">
.editButton{
  position: absolute;
  bottom: 4px;
  right: 3px;
  color: #f6a821;
  cursor: pointer; 
  font-size: 14px;
  text-shadow: 1px 1px darken(#503403, 10%);
}
.trashcan{
  position: absolute;
  right: 20px;
  display: inline;
  right: 40px;
  bottom: 7px;
  cursor: pointer;
  text-shadow: 1px 1px darken(#503403, 10%);
}
.trashcan:hover{
  color: lighten(#f9c56b, 20%);
  
}
.editButton:hover{
  color: lighten(#f9c56b, 20%)
}
.startButton{
  position: absolute;
  width: 40%;
  left: 30%;
  margin-right: 30%
}
.Panel{
    &__name{
        font-size: 1em;
        font-weight: bold;
        color: #f6a821;
      }
    &__setpoint{
        color: white;
        font-weight: bold;
        font-size: 1.75em;
        margin-bottom: .25em;
      }
      &__stats{
          font-size: .75em;
          margin: .25em 0;
          color: lighten(grey, 20%);
        }
}
input{
    border: none;
    display: inline;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    width: 3em;
    background: none;
    outline: 0;
    color: white;
    font-weight: bold;
  }
.hr{
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid grey;
    margin: 1em 0;
    padding: 0;
}

.grid{
  height: 160px;
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
    -moz-columns: 120px;
    -webkit-columns: 120px;
    columns: 120px;
}
.Panel__status{
  font-size: 12px;
  color: lighten(grey, 20%);
  position: absolute;
  left: 6px;
  bottom: 8px;
  display: inline;
}
.Panel__stepcount{
  font-size: 12px;
  color: lighten(grey, 20%);
  position: absolute;
  top: 15px;
  right: 0px;
  text-align: right;

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
    background: rgba(75, 70, 79, 0.5);
    border-radius: 5px;
    padding: 1em;
    //border: 1px solid black;
}

.vue-grid-item.resizing {
    opacity: 0.9;
}

.vue-grid-item.static {
    background: #cce;
}

.vue-grid-item .text {
  font-size: 16px;
  color: lightgrey;
  font-family: Roboto, sans-serif;
//     font-size: 24px;
//     text-align: center;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//     height: 100%;
//     width: 100%;
}

.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
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
      background-color: #2a2d35
      color: darken(#f6a821, 15%)
      padding: 10px 15px
      border-radius: 5px
      border-color: lighten(#2a2d35, 2%)

    #bottombuttons
      position: fixed
      bottom: .5em
      left: 1.3%
      margin-left: auto

    #resetbutton
      background-color: #2a2d35
      color: darken(#f6a821, 15%)
      padding: 10px 20px
      border-radius: 5px
      border-color: lighten(#2a2d35, 2%)
      


  </style>


