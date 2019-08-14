<template>
<div id="wrapper">
    <h2>Heating</h2>

    <div class="Parameter__panel">
      <div class="Panel__name">Heating Group 1: Heater 1</div>
      <div class="Panel__setpoint"><input type="number" value="0"><span class="Panel__unit">°C</span></div>
      <div class="Panel__stats">Actual:  °C</div>
    </div>
    <div class=editButton>
      <router-link to="/ald-automation" tag="button">Done</router-link>
    </div>

</div>
</template>
<!--STLYING -->
<style lang="sass" scoped>
  .editButton
      position: absolute
      bottom: 50px
      right: 50px

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
