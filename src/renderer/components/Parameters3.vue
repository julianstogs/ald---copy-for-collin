<!----------- Written by Julian Stogsdill & Stefan Wagner ------------------->
<template>
    <div id="wrapper">
        <h2 style="color: #f6a821;">Ampoule Heating</h2>
          <hr class="hr" />
            <div class="AutoControl">
<!-------------------- LEFT Ampoule --------------------------------------->
<div class="AutoControl__panel">
        <div class="Panel__name">Heater 12 (Ampoule Left Heater)</div>
        <div class="Panel__setpoint">
            <input v-model.number="hg_1.h12" @change="onHeaterSetpointChange({i: 11, v: hg_1.h12})" type="number" value="200"><span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t12 }} °C</div>
        <div class="Panel__stats">Limit: 250°C</div>
</div>   
 <!-------------------- RIGHT Ampoule --------------------------------------->   
 <div class="AutoControl__panel">
        <div class="Panel__name">Heater 11 (Ampoule Right Heater)</div>
        <div class="Panel__setpoint">
            <input v-model.number="hg_1.h11" @change="onHeaterSetpointChange({i: 10, v: hg_1.h11})" type="number" value="200"><span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Actual: {{ hg_1.t11 }} °C</div>
        <div class="Panel__stats">Limit: 250°C</div>
</div>

 <!--------------------------------------------------------------------------->   
    <div class="editButton"><router-link to="/Automation" class="editButton">Done</router-link></div>
   </div>
</div>
</template>
<!-------------    STLYING     ---------------------------->
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
          color: lighten(grey, 20%);
          

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

</style>
<!-------------         JAVASCRIPT         --------------------->
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