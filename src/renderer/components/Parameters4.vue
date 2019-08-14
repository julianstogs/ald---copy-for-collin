<!---------------Written by Julian Stogsdill & Stefan Wagner -------------------------->
<!-- <input id="temp" oninvalid="alert('Temperature out of range!');" type="number" value="0" min="0" max="175" required> -->
<template>
<div id="wrapper">
   <h2>Heating</h2>
        <hr class="hr" />
    <div class="AutoControl">
<!-------------------------------------------------------------------------->
    <div class="AutoControl__panel">
      <div class="Panel__name">Heating Group : Heater 1</div>
      <div class="Panel__setpoint">
        <form>
          <input id="temp" oninvalid="alert('Temperature out of range!');" type="number" value="0" min="0" max="175" required><span class="Panel__unit">°C</span>
        </form>
    </div>
      <div class="Panel__stats">Actual:  °C</div>
    </div>
    <div class=editButton>
      <router-link to="/Automation" class="editButton">Done</router-link>
    </div>
    </div>
</div>
</template>

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
    
    /* input:valid {
    background: rgba(68, 70, 79, 0.5);
      color: white;
      border-radius: 5px;
    } */
</style>
<!-----------------------STLYING ---------------------------------->
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
