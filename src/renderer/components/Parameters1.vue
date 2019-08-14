<!--------Written by Julian Stogsdill and Stefan Wagner ------->
<template>
<div id="wrapper">
    <h2 style="color: #f6a821;">Heating</h2>
        <hr class="hr" />
            <div class="AutoControl">
<!--------------------------------------------------------------->
    <div class="AutoControl__panel">
        <div class="Panel__name">Heater 1 (Pump Canister)</div>
        <div class="Panel__setpoint">
          <form>
            <input id="temp" oninvalid="alert('Zone 1 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h1" @change="onHeaterSetpointChange({i: 0, v: hg_1.h1})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t1 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
    
    </div>
<!-------------------------------------------------------------------->
    <div class="AutoControl__panel">
        <div class="Panel__name">Heater 2</div>
        <div class="Panel__setpoint">
         <form>
            <input id="temp" oninvalid="alert('Zone 2 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h2" @change="onHeaterSetpointChange({i: 1, v: hg_1.h2})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t2 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 3</div>
        <div class="Panel__setpoint">
          <form>
            <input id="temp" oninvalid="alert('Zone 3 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h3" @change="onHeaterSetpointChange({i: 2, v: hg_1.h3})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t3 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 4</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 4 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h4" @change="onHeaterSetpointChange({i: 3, v: hg_1.h4})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t4 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 5</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 5 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h5" @change="onHeaterSetpointChange({i: 4, v: hg_1.h5})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t5 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 6</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 6 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h6" @change="onHeaterSetpointChange({i: 5, v: hg_1.h6})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t6 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 7 (Bakeout Heater)</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 7 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h7" @change="onHeaterSetpointChange({i: 6, v: hg_1.h7})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t7 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 8 (Bakeout Heater)</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 8 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h8" @change="onHeaterSetpointChange({i: 7, v: hg_1.h8})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t8 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 9 (ALD Valve Heater)</div>
        <div class="Panel__setpoint">
          <form>
            <input id="temp" oninvalid="alert('Zone 9 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h9" @change="onHeaterSetpointChange({i: 8, v: hg_1.h9})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t9 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 10 (Upper Line Heater)</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 10 temperature cannot be more than 175 °C');" type="number" v-model.number="hg_1.h10" @change="onHeaterSetpointChange({i: 9, v: hg_1.h10})" value="0" min="0" max="175" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t10 }} °C</div>
        <div class="Panel__stats">Limit: 175°C</div>
</div>
<!-------------------------------------------------------------------->
<!-- <div class="AutoControl__panel">
        <div class="Panel__name">Heater 11 (Ampoule Right Heater)</div>
        <div class="Panel__setpoint">
        <input v-model.number="hg_1.h11" @change="onHeaterSetpointChange({i: 10, v: hg_1.h11})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t11 }} °C</div>
</div>
----------------------------------------------------------------------------
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 12 (Ampoule Left Heater)</div>
        <div class="Panel__setpoint">
        <input v-model.number="hg_1.h12" @change="onHeaterSetpointChange({i: 11, v: hg_1.h12})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t12 }} °C</div>
</div> -->
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 13 (Showerhead Heater)</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 13 temperature cannot be more than 200 °C');" type="number" v-model.number="hg_1.h13" @change="onHeaterSetpointChange({i: 12, v: hg_1.h13})" value="0" min="0" max="200" required><span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t13 }} °C</div>
        <div class="Panel__stats">Limit: 200°C</div>
</div>
<!-------------------------------------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 14 (Substrate Heater)</div>
        <div class="Panel__setpoint">
          <form>
              <input id="temp" oninvalid="alert('Zone 14 temperature cannot be more than 400 °C');" type="number" v-model.number="hg_1.h14" @change="onHeaterSetpointChange({i: 13, v: hg_1.h14})" value="0" min="0" max="400" required> <span class="Panel__unit">°C</span>
          </form>
        </div>
        <div class="Panel__stats">Actual: {{ hg_1.t14 }} °C</div>
        <div class="Panel__stats">Limit: 400°C</div>
</div>

<div class="editButton"><router-link to="/Parameters-template" class="editButton">Done</router-link></div>
  </div>
</div>
</template>

<!---------- Styling (CSS/Sass) ------------->
<style lang="sass" scoped>
  .editButton
    position: absolute
    bottom: 13px
    right: 25px
    font-size: 16px
  .AutoControl
    display: grid
    grid-template: 1fr / 1fr 1fr 1fr 1fr
    grid-gap: 2em
    grid-auto-rows: 1fr
    margin-bottom: 3em

    @media screen and (max-width: 1100px)
      grid-template: 1fr / 1fr 1fr 1fr
    
    @media screen and (max-width: 900px)
      grid-template: 1fr / 1fr 1fr

    &--switches
      grid-template: 1fr / 1fr 1fr 1fr

      @media screen and (max-width: 1100px)
        grid-template: 1fr / 1fr 1fr

    &__panel
      border-radius: 5px
      padding: 1em
      background-color: rgba(68, 70, 79, 0.5)

    &__panel:target
      background-color: 

    &--zone
      color: white
      background-color: rgba(246,168,33, 0.9)

    &--switch
      display: flex
      flex-direction: row

  .Panel
    &__name
      font-size: .75em

    &__setpoint
      color: white
      font-weight: bold
      font-size: 1.75em
      margin-bottom: .25em

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

<style lang="css" scoped>
input {
    border: none;
    display: inline;
    font-family: inherit;
    font-size: 23px;
    padding: 0;
    width: 4em;
    background: none;
    outline: 0;
    color: white;
    font-weight: bold;
    }
    input:invalid {
      background:none;
      color:white;
      border: 3px solid red;
      border-radius: 10px;
    }
</style>

<!------------------ JAVASCRIPT ---------------------->
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