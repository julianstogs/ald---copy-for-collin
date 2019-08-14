<!-- Written By Julian Stogsdill & Stefan Wagner -->
<template>
    <div id="wrapper">
<!-----------------------Second Grid Starts Here (Draggable Steps)--------------------------------------------------------->
      <h2 style="color: #f6a821;">Steps</h2>
      <hr class="hr" />
      <grid-layout
        :layout.sync="substepsGrid"
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
          :x=substepsGrid[0].x
          :y=substepsGrid[0].y
          :w=substepsGrid[0].w
          :h=substepsGrid[0].h
          :i=substepsGrid[0].i
          :isDraggable=substepsGrid[0].isDraggable>

          <center><div class="Panel__name">Heating</div></center>
          <div class="editButton">
            <router-link to="/Parameters1" class="editButton">Edit</router-link></router-link>
          </div> <br>
          <div class="Panel__status">Status:</div>

        </grid-item>
<!---------------------------------------------------------------------------------------->
        <grid-item
          :x=substepsGrid[1].x
          :y=substepsGrid[1].y
          :w=substepsGrid[1].w
          :h=substepsGrid[1].h
          :i=substepsGrid[1].i
          :isDraggable=substepsGrid[1].isDraggable>

         <center><div class="Panel__name">Plasma</div></center>
          <div class="editButton">
            <router-link to="/Parameters2" class="editButton">Edit</router-link>
          </div> <br>
          <div class="Panel__status">Status:</div>

        </grid-item>
<!---------------------------------------------------------------------------------------->
        <grid-item
          :x=substepsGrid[2].x
          :y=substepsGrid[2].y
          :w=substepsGrid[2].w
          :h=substepsGrid[2].h
          :i=substepsGrid[2].i
          :isDraggable=substepsGrid[2].isDraggable>

          <center><div class="Panel__name">Ampoule</div></center>
          <div class="editButton">
            <router-link to="/Parameters3" class="editButton">Edit</router-link>
          </div> <br>
          <div class="Panel__status">Status:</div>
        </grid-item>
<!---------------------------------------------------------------------------------------->
       <div class="gridtile">
        <grid-item
          :x=substepsGrid[3].x
          :y=substepsGrid[3].y
          :w=substepsGrid[3].w
          :h=substepsGrid[3].h
          :i=substepsGrid[3].i
          :isDraggable=substepsGrid[3].isDraggable>

          <center><div class="Panel__name">Purge</div></center>
          <div class="editButton">
            <router-link to="/Parameters4" class="editButton">Edit</router-link>
          </div> <br>
          <div class="Panel__status">Status:</div>

        </grid-item>
      </div>
</grid-layout>
<div class="editButton"><router-link to="/Automation" class="doneButton">Done</router-link></div>
<!---------------- Start Growth/Reset Button ------------->
    <div id="bottombuttons">
      <button id="resetbutton">Reset</button>
      <button id="startbutton">Start Growth</button>
    </div>

    </div>

</template>

<!--************************************************************************************-->
<!-------------------------JAVASCRIPT----------------------------------------------------->
<script>
import VueGridLayout from 'vue-grid-layout'
import {mapActions} from 'vuex';

export default {
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem
	},
  computed: {
    displayGrid(){
      return this.$store.state.displayGrid
    },
    stepsGrid(){
      return this.$store.state.stepsGrid
    },
     substepsGrid(){
      return this.$store.state.substepsGrid
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
  },
  methods: {
    ...mapActions([
      'onHeaterSetpointChange',
      'onClick',
      'getIon',
      'getConv',
      'average',
    ])
  }
}
</script>

<!-------------------------CSS/SASS Styling--------------------------------------------------------------->
<style lang="scss">
.editButton{
  position: absolute;
  bottom: 13px;
  right: 25px;
  color: #f6a821;
  cursor: pointer; 
  font-size: 14px;
  text-shadow: 1px 1px darken(#503403, 10%);
}
.editButton:hover{
  color: lighten(#f9c56b, 20%)
}

.doneButton{
  position: absolute;
  bottom: 13px;
  right: 25px;
  color: #f6a821;
  cursor: pointer; 
  font-size: 14px;
  text-shadow: 1px 1px darken(#503403, 10%);
}
.doneButton:hover{
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


