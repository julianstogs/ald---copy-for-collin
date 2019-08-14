<!------------- Written by Julian Stogsill & Stefan Wagner --------------->
<template>
<div id="wrapper">
    <h2 style="color: #f6a821;">Plasma Settings</h2>
        <hr class="hr" />
            <div class="AutoControl">
<!------------------------------------------------------------------------>
    <div class="AutoControl__panel">
        <div class="Panel__name"><center>Power & Time</center></div>
            Power:
            <input v-model.number="RFsetpoint" @change="onRFsetpointChange(RFsetpoint)" type="string"><span class="Panel__unit">Watts</span><br><br>
            Time:
            <input type="text" name="Plasma_time"><span class="Panel__unit">Seconds</span>  <!-- need function for carrying time input to Automation sequence -->
    </div>
<!------------------------------------------------------------------------>
    <div class="AutoControl__panel">
        <center><div class="Panel__name">Gas Type</div></center>
        <div class="Panel__stats">
            <form>
                <input type="checkbox" name="plasma_Hydrogen">Hydrogen  <br>
                <input type="checkbox" name="plasma_Argon">Argon        <br>
                <input type="checkbox" name="plasma_Nitrogen">Nitrogen  <br>
                <input type="checkbox" name="plasma_Oxygen">Oxygen      <br>
            </form>
        </div>
    </div>
<!------------------------------------------------------------------------>  
    <div class="editButton">
      <router-link to="/Automation" class="editButton">Done</router-link>
    </div>
  </div>
</div>
</template>
<!-----------------------STLYING --------------------------------->
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
<!----------------- JAVASCRIPT --------------------------------------------->
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

export default{
  computed: {
    ...mapState({
       RF: 'switches.RF'
    }),

    RFsetpoint: {
      get(){
        return this.$store.state.setpointRF
      },
      set(value){
        this.$store.dispatch('RFsetpoint',value)
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
    input(){
      return this.$store.state.input;
    },
    setpoint(){
      return this.$store.state.setpoint;
    },
    setpointRF(){
      return this.$store.state.setpointRF;
    },
  },
  methods: {
    ...mapActions([
      'onRFsetpointChange',
    ])
  },
}
</script>