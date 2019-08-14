<!-- Written by : Julian A. Stogsdill - Last edit 6/18/19 -->
<!------------HTML---------------->
<template>
  <div id="wrapper">
    <h2>Pre-Growth</h2>
       <hr class="hr" />
    <div class="AutoControl"> 
<!------------ System Conditions ------------->
  <div class="AutoControl__panel">                                        <!-- outline for each component panel-->
    <div class="Panel__name"><center>System Conditions</center></div>
    <div class="Panel__setpoint"><input v-model.number="hg_1.ha" @change="onGroupChange(hg_1.ha)" type="number"><span class="Panel__unit">°C</span></div>
    <div class="Panel__stats">Chamber Average: {{ hg_1.ta }}°C</div>
    <div class="Panel__stats">Substrate Temp:  {{ hg_1.t14 }} °C</div>
    <div class="Panel__stats">Amp. Left/Right:  {{ hg_1.t12 }}°C / {{ hg_1.t11 }}°C </div>
  </div>
        <!------------ System Conditions ------------->
<div class="AutoControl__panel">                                        <!-- outline for each component panel-->
  <div class="Panel__name"><center>Pressure</center></div>
  <div class="Panel__setpoint"><input v-model.number="command" @change="onCommandChange(command)" type="string"></div>
    <div class="Panel__stats"> Ion Pressure: {{ionpressure}}</div>
    <div class="Panel__stats"> Convectron 1 Pressure: {{convpressure1}}</div>
    <div class="Panel__stats"> Convectron 2 Pressure: {{convpressure2}}</div>
    <div class="Panel__stats">Response: {{response}}</div>
</div>
<!----------- Bubbler Heating -------------------------------->
<div class="AutoControl__panel">
  <div class="Panel__name"><center>Ampoule Heating</center></div>
    <form>
      Right:   <br>                                   <!-- which one is left/right? -->
      <input v-model.number="hg_1.h11" @change="onHeaterSetpointChange({i: 11, v: hg_1.h12})" type="number" value="200"> °C<br>
    <br>  Left:    <br>
      <input v-model.number="hg_1.h12" @change="onHeaterSetpointChange({i: 12, v: hg_1.h13})" type="number" value="200"> °C
    </form>
</div>
<!----------- Plasma / Cleaning (NOT DONE)-------------------------------->
<div class="AutoControl__panel">
  <div class="Panel__name"><center>Plasma / Clean</center></div>
    Power (W):
    <input v-model.number="RFsetpoint" @change="onRFsetpointChange(RFsetpoint)" type="string"><br>
    Time (Sec):
    <input type="text" name="Plasma_time"> <!-- need function for carrying time input to Automation sequence -->
  <div class="Panel__stats">
    <form>
      Gas Type: <br>
        <input type="checkbox" name="Plasma_Gas1">Hydrogen  <br>
        <input type="checkbox" name="Plasma_Gas2">Argon     <br>
        <input type="checkbox" name="Plasma_Gas3">Nitrogen  <br>
        <input type="checkbox" name="Plasma_Gas4">Oxygen    <br>
    </form>
  </div>
</div>

<!------------- PURGE AMPOULES --------------->
<div class="AutoControl__panel">
  <div class="Panel__name"><center>Purge Ampoule</center></div>
    <div class="Panel__setpoint"><center><button class="RunButton" type="button">Purge Ampoule 1</button></center></div>
    <div class="Panel__setpoint"><center><button class="RunButton" type="button">Purge Ampoule 2</button></center></div>
</div>
<!----------- VENT/GATE -------------------------------->
<div class="AutoControl__panel">
  <div class="Panel__name"><center>Sample Transfer</center></div>
    <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Open Vent</button></center></div>
    <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Open Gate</button></center></div>
</div>
<!----------- Transfer Substrate -------------------------------->
<div class="AutoControl__panel">
  <div class="Panel__name"><center>Substrate-Transfer Method</center></div>
    <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Vent</button></center></div>
    <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">XPS/Gate</button></center></div>
</div>
<!---------------- Start Growth/Reset Button ------------->
<div id="bottombuttons">
  <button id="resetbutton">Reset</button>
  <button id="startbutton">Start Growth</button>
</div>



    </div>
  </div>
</template>
<!---------- Styling (CSS/Sass) ------------->
<style lang="sass" scoped>

    .hr
        display: block
        height: 1px
        border: 0
        border-top: 1px solid rgba(255,255,255,.1)
        margin: 1em 0
        padding: 0

    .AutoControl
        display: grid
        grid-template: 1fr / 1fr 1fr 1fr 1fr /*creates 4 column grid, for 5 column grid -- 1fr/ 1fr 1fr 1fr 1fr 1fr*/
        grid-gap: 0.75em
        grid-auto-rows: 1fr
        margin-bottom: 1em

        @media screen and (max-width: 1100px)
            grid-template: 1fr / 1fr fr 1fr

        @media screen and (max-width: 900px)
            grid-template: 1fr / 1fr 1fr

        &--switches
            grid-template: 1fr / 1fr 1fr 1fr

            @media screen and (max-width: 1100px)
                grid-template: 1fr / 1fr 1fr

        &__panel                     /*box surrounding each panel*/
            border-radius: 15px      /* Rounding of edges of each panel */
            padding: 0.2em
            background-color: rgba(80, 70, 70, 0.5)
            &--zone
                color: white
                background-color: rgba(246,168,33, 0.9)

            &--switch
                display: flex
                flex-direction: row


    .Panel

        &__name
            font-size: 0.85em

        &__setpoint
            color: white
            font-weight: bold
            font-size: 1.75em
            margin-bottom: .05em

        &__stats
            font-size: .75em
            margin: .25em 0

        &__switch
            display: flex

        &__switch-state
            margin-left: 1em
            width: 40px

        &--switch

            .Panel__name
                font-size: 1em
                font-weight: bold
                flex-grow: 1

    input
        border: none
        display: center
        font-family: inherit
        font-size: inherit
        padding: 0
        width: 3em
        background: none
        outline: 0
        color: white
        font-weight: bold

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none
        margin: 0 /* <-- Apparently some margin are still there even though it's hidden */


    .switch input
        position: absolute
        opacity: 0

    .switch
        display: inline-block
        font-size: 20px
        height: 1em
        width: 2em
        background: #BDB9A6
        border-radius: 1em

    .switch div
        height: 1em
        width: 1em
        border-radius: 1em
        background: #FFF
        box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3)
        -webkit-transition: all 300ms

    .switch input:checked + div
        background: rgba(246,168,33, 0.9)
        -webkit-transform: translate3d(100%, 0, 0)

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

 <!----------Javascript ------------------->
<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  import {mapState} from 'vuex';

  export default{
    computed: {
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
