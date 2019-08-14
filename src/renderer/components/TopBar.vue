<!--Julian Stogsdill - Edited 5/26/19 -->
<template>
  <div class="TopBar">
    <div class="TopBar__app-ver">
      <div class="logo"><a href="#"><img src="ald-logo.png"></a></div>
      <div class="TopBar__app">Re-Mastered | Caruso Research Group</div>
      <div class="TopBar__ver">v1.1</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top-bar'
  }
</script>

<style lang="sass">
  .TopBar             /*Long top-bar section */
    display: flex
    flex-direction: row
    background-color: #f6a821
    -webkit-app-region: drag
    flex: 0 0 65px

    &__app-ver                /*Top Left corner section */
      font-family: Roboto, sans-serif
      width: 600px
      background: #f6a821
      color: white
      display: flex
      flex-direction: row
      align-items: center
      padding: 1.25em 0

    &__app
      margin-left: 80px
      flex-grow: 1
      font-size: 1.25em
      letter-spacing: 2px

    &__ver
      margin-right: 1.25em
      font-size: .8em
      color: rgba(200,255,255,.8)

  .logo
    position: absolute
    left: 10px

</style>
