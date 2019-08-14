<template>
  <div id="app">
    <top-bar></top-bar>
    <div class="app__body">
      <side-bar></side-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopBar from "./components/TopBar.vue"
  import SideBar from "./components/SideBar.vue"
  export default {
    name: 'app',
    components: {
      TopBar,
      SideBar
    }
  }
</script>

<style lang="sass">

  html, body
    margin: 0
    padding: 0
    overflow: hidden

  body
    font-size: 16px
    color: lightgrey
    font-family: Roboto, sans-serif
    /*font-family: sans-serif*/

  h1,h2,h3,h4
    color: white

  #app
    background-color: #32353e
    height: 100vh
    display: flex
    flex-direction: column

  .app__body
    display: flex
    flex-direction: row
    flex-grow: 1
    overflow: scroll

  #wrapper
    padding: 1em 2.5em
    flex-grow: 1

  @font-face
    font-family: "Moon"
    src: url("/src/renderer/assets/fonts/Moon Light.otf")
    font-weight: normal
    font-style: normal

  @font-face
    font-family: "Moon"
    src: url("/src/renderer/assets/fonts/Moon Bold.otf")
    font-weight: bold
    font-style: normal

  @font-face
    font-family: "Roboto"
    src: url("/src/renderer/assets/fonts/Roboto-Light.ttf")
    font-weight: normal
    font-style: normal

  @font-face
    font-family: "Roboto"
    src: url("/src/renderer/assets/fonts/Roboto-Medium.ttf")
    font-weight: bold
    font-style: normal

</style>
