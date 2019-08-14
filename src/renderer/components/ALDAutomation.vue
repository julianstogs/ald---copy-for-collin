<!-- Written by : Julian A. Stogsdill - Last edit 5/26/19 -->
<!--             HTML              -->
<template>
  <div id="wrapper">
<center><h2>ALD Automation</h2> <hr class="hr" /></center> <!--Title -->
<center><h3>Pre-Growth</h3></center>

<div class="AutoControl">

<!------------ Preheat/Heating Zones ------------->
  <div class="AutoControl__panel">                                        <!-- outline for each component panel-->
        <div class="Panel__name"><center>Zone Temperatures</center></div>
        <div class="Panel__setpoint"><input type="number"><span class="Panel__unit">°C</span></div>
        <div class="Panel__stats">Average:__°C</div>
        <div class="Panel__stats">Heaters: 14</div>
        </div>

<!------------- PURGE AMPOULES --------------->
  <div class="AutoControl__panel">
        <div class="Panel__name"><center>Purge Ampoule</center></div>
        <div class="Panel__setpoint"><center><button class="RunButton" type="button">Purge Ampoule 1</button></center></div>  <!-- NEED TO STYLE RunButton -->
        <div class="Panel__setpoint"><center><button class="RunButton" type="button">Purge Ampoule 2</button></center></div>  <!-- NEED TO STYLE RunButton -->
        </div>
  <!----------- BUBBLER -------------------------------->
    <div class="AutoControl__panel">
        <div class="Panel__name"><center>Load Bubblers</center></div>
        <div class="Panel__setpoint"><center><button class="RunButton" type="button">Load Bubbler: 1</button></center></div>  <!-- NEED TO STYLE RunButton -->
        <div class="Panel__setpoint"><center><button class="RunButton" type="button">Load Bubbler: 2</button></center></div>  <!-- NEED TO STYLE RunButton -->
        <div class="Panel__stats"><center><button class="EditButton" type="button">Edit</button></center></div>
        </div>

<!----------- VENT/GATE -------------------------------->
    <div class="AutoControl__panel">
        <div class="Panel__name"><center>Vent/Gate Control</center></div>
        <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Open Vent</button></center></div>  <!-- NEED TO STYLE RunButton -->
        <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Open Gate</button></center></div>  <!-- NEED TO STYLE RunButton -->
        </div>
<!----------- Transfer Substrate -------------------------------->
    <div class="AutoControl__panel">
        <div class="Panel__name"><center>Substrate-Transfer Method</center></div>
        <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Vent</button></center></div>  <!-- NEED TO STYLE RunButton -->
        <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">XPS/Gate</button></center></div>  <!-- NEED TO STYLE RunButton -->
        </div>

<!----------- Bubbler Heating -------------------------------->
    <div class="AutoControl__panel">
       <div class="Panel__name"><center>Bubbler Heating</center></div>
       <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Heat Bubbler 1</button></center></div>  <!-- NEED TO STYLE RunButton -->
       <div class="Panel__setpoint"><center><button class="RunButton" type="checkbox">Heat Bubbler 2</button></center></div>  <!-- NEED TO STYLE RunButton -->
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
        grid-template: 1fr / 1fr 1fr 1fr 1fr
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
            border-radius: 30px      /* Rounding of edges of each panel */
            padding: 0.5em
            background-color: rgba(90, 70, 79, 0.5)

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
      	background-color: #f6a821
      	padding: 15px 35px
      	font-size: 10px
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
      		transition: background-color .2s ease
      		position: absolute
      		content: ''
      		height: 4px
      		bottom: 0
      		width: 100%
      		background-color: darken(#f6a821, 50%)
      		opacity: .18
      		border-bottom-left-radius: 2px
      		border-bottom-right-radius: 2px
      		left: 0
      	&:focus, &:hover
      		text-decoration: none
      		color: #fff
      	&:hover
      		background-color: lighten(#f6a821, 5%)
      		&::after
      			opacity: .22
      	&:active
      		background-color: darken(#f6a821, 5%)
      		&::after
      			opacity: .32
</style>
