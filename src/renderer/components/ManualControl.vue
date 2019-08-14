<template>
  <div id="wrapper">
    <h2>Manual Control</h2>
    <hr class="hr" />
    <!--this is the section that displays all the toggle switches-->
    <!-- ADLValve0 -->
    <div class="ManualControl ManualControl--switches">

      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">ALD Valve0</div>
          <div class="Panel__switch">
            <label class="switch">
              <input type="checkbox" v-model="ald0"/>
              <span class="slider round"></span>
              <div></div>
            </label>
            <span class="Panel__switch-state">
              <span v-if="switches.ald0">Open</span>
              <span v-else>Close</span>
            </span>
          </div>
      </div>

      <!-- ALDValve1 -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">ALD Valve1</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="ald1"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.ald1">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- Welch -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">Welch</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="gate_valve"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.gate_valve">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- Vent -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">Vent</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="purge"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.purge">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- ALD-XPS -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">ALD-XPS</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="xps"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.xps">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- Evap -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">Evap</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="evap"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.evap">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- Cryo -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">Cryo</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="cryo"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.cryo">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- Ion Gauge -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">Ion Gauge</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="ion"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.ion">On</span><span v-else>Off</span></span></div>
      </div>
      <!--<div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
      <div class="Panel__name">Convectron Gauge</div>
      <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="conv"/>
      <span class="slider round"></span><div></div>
         </label><span class="Panel__switch-state"><span v-if="switches.conv">2</span><span v-else>1</span></span></div>
    </div>-->
      <!-- Throttle Valve -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">Throttle Valve</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="throttle"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.throttle">Open</span><span v-else>Close</span></span></div>
      </div>
      <!-- RF Output -->
      <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
        <div class="Panel__name">RF Output</div>
        <div class="Panel__switch"><label class="switch"><input type="checkbox" v-model="RF"/>
        <span class="slider round"></span><div></div>
          </label><span class="Panel__switch-state"><span v-if="switches.RF">On</span><span v-else>Off</span></span></div>
      </div>
    </div>
    <!--this is the section that declares all the mfc displays/Appearances-->
    <div class="ManualControl ManualControl--mfc">
      <div class="ManualControl__panel">
        <div class="Panel__name">MFC 1: Argon</div>
        <div class="Panel__setpoint"><input v-model.number="mfc0.sp" @change="onMfcChange({i: 0, v: mfc0.sp})" type="number" value="0"><span class="Panel__unit">sccm</span></div>
        <div class="Panel__stats">Actual: {{mfc0.fr}} sccm</div>
        <div class="Panel__stats">Max: 200 sccm</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">MFC 2: Oxygen</div>
        <div class="Panel__setpoint"><input v-model.number="mfc1.sp" @change="onMfcChange({i: 1, v: mfc1.sp})" type="number" value="0"><span class="Panel__unit">sccm</span></div>
        <div class="Panel__stats">Actual: {{mfc1.fr}} sccm</div>
        <div class="Panel__stats">Max: 500 sccm</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">MFC 3: Nitrogen</div>
        <div class="Panel__setpoint"><input v-model.number="mfc2.sp" @change="onMfcChange({i: 2, v: mfc2.sp})" type="number" value="0"><span class="Panel__unit">sccm</span></div>
        <div class="Panel__stats">Actual: {{mfc2.fr}} sccm</div>
        <div class="Panel__stats">Max: 100 sccm</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Pressure</div>
        <!--<div class="Panel__setpoint"><input v-model="command" @change="onCommandChange(command)" type="string"></div>-->
        <div class="Panel__stats"> Ion Pressure: {{ionpressure}}</div>
        <div class="Panel__stats"> Convectron 1 Pressure: {{convpressure1}}</div>
        <!--<div class="Panel__stats"> Convectron 2 Pressure: {{convpressure2}}</div>-->
        <!--<div class="Panel__stats">Response: {{response}}</div>-->
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Throttle Valve</div>
        <div class="Panel__setpoint"><input v-model="throttleSet" @change="onSetpointChange(throttleSet)" type="string">SP (mT)</div>
        <div class="Panel__stats"> Valve Position: {{valvePos}}</div>
        <div class="Panel__stats"> Current Setpoint: {{setpoint}}</div>
        <div class="Panel__stats"> Pressure: {{manopressure}}</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">RF Plasma</div>
        <div class="Panel__setpoint"><input v-model="RFsetpoint" @change="onRFsetpointChange(RFsetpoint)" type="string">SP (W)</div>
        <div class="Panel__stats"> Forward Power: {{Fpower}}</div>
        <div class="Panel__stats"> Reflected Power: {{Rpower}}</div>
        <div class="Panel__stats"> RF Setpoint: {{setpointRF}}</div>
      </div>
    </div>
    <!--this is the section that declares all the heating zones display-->
    <div class="ManualControl ManualControl--heater">
      <div class="ManualControl__panel ManualControl__panel--zone">
        <div class="Panel__nameAvg">Heating Group 1: All Test</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.ha" @change="onGroupChange(hg_1.ha)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Average: {{ hg_1.ta }} °C</div>
        <div class="Panel__stats">Heaters: 14</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Pump canister Heater (1)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h1" @change="onHeaterSetpointChange({i: 0, v: hg_1.h1})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t1 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Heater 2</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h2" @change="onHeaterSetpointChange({i: 1, v: hg_1.h2})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t2 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Heater 3</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h3" @change="onHeaterSetpointChange({i: 2, v: hg_1.h3})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t3 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Heater 4</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h4" @change="onHeaterSetpointChange({i: 3, v: hg_1.h4})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t4 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Heater 5</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h5" @change="onHeaterSetpointChange({i: 4, v: hg_1.h5})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t5 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Heater 6</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h6" @change="onHeaterSetpointChange({i: 5, v: hg_1.h6})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t6 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Bakeout Heater (7)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h7" @change="onHeaterSetpointChange({i: 6, v: hg_1.h7})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t7 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Bakeout Heater (8)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h8" @change="onHeaterSetpointChange({i: 7, v: hg_1.h8})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t8 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: ALD Valve Heater (9)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h9" @change="onHeaterSetpointChange({i: 8, v: hg_1.h9})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t9 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Upper Line Heater (10)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h10" @change="onHeaterSetpointChange({i: 9, v: hg_1.h10})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t10 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Amp Right Heater (11)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h11" @change="onHeaterSetpointChange({i: 10, v: hg_1.h11})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t11 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Amp Left Heater (12)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h12" @change="onHeaterSetpointChange({i: 11, v: hg_1.h12})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t12 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Showerhead Heater (13)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h13" @change="onHeaterSetpointChange({i: 12, v: hg_1.h13})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t13 }} °C</div>
      </div>
      <div class="ManualControl__panel">
        <div class="Panel__name">Heating Group 1: Substrate Heater (14)</div>
        <div class="Panel__setpoint"><input v-model.number="hg_1.h14" @change="onHeaterSetpointChange({i: 13, v: hg_1.h14})" type="number" value="200"> <span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t14 }} °C</div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>

    .hr
        display: block
        height: 1px
        border: 0
        border-top: 1px solid rgba(255,255,255,.1)
        margin: 1em 0
        padding: 0

    .ManualControl
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

            &--zone
                color: white
                background-color: rgba(246,168,33, 0.9)

            &--switch
                display: flex
                flex-direction: row


    .Panel

        &__name
            font-size: .75em
        &__nameAvg
          color: white
          font-size: 1em;
          font-weight: bold;

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
    input
        border: none
        display: inline
        font-family: inherit
        font-size: inherit
        padding: 0
        width: 2em
        background: none
        outline: 0
        color: white
        font-weight: bold

    .switch
        position: relative
        display: inline-block
        width: 50px
        height: 24px

    .switch input
        opacity: 0
        width: 0
        height: 0

    .slider
        position: absolute
        cursor: pointer
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: #ccc
        -webkit-transition: .4s
        transition: .4s

    .slider:before
        position: absolute
        content: ""
        height: 16px
        width: 16px
        left: 4px
        bottom: 4px
        background-color: white
        -webkit-transition: .4s
        transition: .4s

    input:checked + .slider
        background-color: #2196F3

    input:focus + .slider
        box-shadow: 0 0 1px #2196F3

    input:checked + .slider:before
        -webkit-transform: translateX(26px)
        -ms-transform: translateX(26px)
        transform: translateX(26px)

    .slider.round
        border-radius: 34px

    .slider.round:before
        border-radius: 50%

</style>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default{
  computed: {
    ...mapState([
      'switches',
    ]),
    RFsetpoint: {
      get(){
        return this.$store.state.setpointRF
      },
      set(value){
        this.$store.dispatch('RFsetpoint',value)
      }
    },
    throttleSet: {
      get(){
        return this.$store.state.throttleSet
      },
      set(value){
        this.$store.dispatch('throttleSet',value)
      }
    },
    ald0: {
      get(){
        return this.$store.state.switches.ald0
      },
      set(checked){
        this.$store.dispatch('onSwitchAld0', checked)
      }
    },
    ald1: {
      get(){
        return this.$store.state.switches.ald1
      },
      set(checked){
        this.$store.dispatch('onSwitchAld1', checked)
      }
    },
    gate_valve: {
      get(){
        return this.$store.state.switches.gate_valve
      },
      set(checked){
        this.$store.dispatch('onSwitchWelch', checked)
      }
    },
    purge: {
      get(){
        return this.$store.state.switches.purge
      },
      set(checked){
        this.$store.dispatch('onSwitchVent', checked)
      }
    },
    xps: {
      get(){
        return this.$store.state.switches.xps
      },
      set(checked){
        this.$store.dispatch('onSwitchXps', checked)
      }
    },
    cryo: {
      get(){
        return this.$store.state.switches.cryo
      },
      set(checked){
        this.$store.dispatch('onSwitchCryo', checked)
      }
    },
    throttle: {
      get(){
        return this.$store.state.switches.throttle
      },
      set(checked){
        this.$store.dispatch('onSwitchThrottle', checked)
      }
    },
    RF: {
      get(){
        return this.$store.state.switches.RF
      },
      set(checked){
        this.$store.dispatch('onSwitchRF', checked)
      }
    },
    ion: {
      get(){
        return this.$store.state.switches.ion
      },
      set(checked){
        this.$store.dispatch('onSwitchIon', checked)
      }
    },
    evap: {
      get(){
        return this.$store.state.switches.evap
      },
      set(checked){
        this.$store.dispatch('onSwitchEvap', checked)
      }
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
