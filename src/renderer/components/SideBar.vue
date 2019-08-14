<!-- Written by Julian Stogsdill and Stefan Wagner -->
<!-- This section defines the labels / buttons on the sidebar menu -->
<!--Comments on far right, aligned for easier navigation-->

<template>                                                                <!-- When needing to create a new sidebar button, you first must edit the index file and add -->
  <div class="SideBar">                                                   <!-- the code to tell the program where the new button code is located.     -JS              -->
    <nav class="Nav">
      <div class="Nav__header">Main</div>                                                          <!--Creates 'Main' header-->
        <router-link tag="div" class="Nav__item" to="/">Dashboard</router-link>                      <!-- routes Dashboard button to location from index file -->
        <router-link tag="div" class="Nav__item" to="/Automation">Automation</router-link>       <!-- Creating clickable Automation Tab -->
        <router-link tag="div" class="Nav__item" to="/manual-control">Manual Control</router-link>   <!-- routes Manual Control button to location from index file-->
      
   
   <div class="Nav__header">Experiments</div>                                                   <!-- 'Experiments' Header-->
      <router-link tag="div" class="Nav__item" to="/saved-growths">Saved Growths</router-link>     <!-- routes Saved Growths button to location from index file-->
      <div class="Nav__item">Bakeout</div>                                                         <!-- Bakeout Tab Heading, has no router link index file, AKA non-clickable -->

  <div class="Nav__header">Other</div>           <!-- These are simply headers, have no function yet, to be continued -->
      <div class="Nav__item">Wiki</div>
      <div class="Nav__item">Troubleshoot</div>
  </nav>
  </div>
</template>

<script>
  export default {
    name: 'side-bar'
  }
</script>
<!-- SASS, Designing the appearance of the sidebar and tabs -->
<style lang="sass">

  .SideBar
    background-color: #24262d
    flex: 0 0 230px
    font-size: .95em
    color: #848c94

  .Nav
    background-color: #2a2d35
    padding: 1.5em 0

    /*&__header, &__item*/

    &__header
      padding: 1.5em 0 .75em
      font-weight: bold
      color: white
      margin-left: 1.25em

    &__item
      cursor: pointer
      padding: .65em 1em
      border-left: .35em solid transparent
      /*padding-left: 1em*/

      &:hover
        color: #f6a821

    .router-link-exact-active
       color: lighten(#f6a821, 5%) 
       border-color: #f6a821

</style>
