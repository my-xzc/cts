<template>
  <div id="app">
    <app-header class="head"></app-header>
    <transition   name="custom-classes-transition"
                  enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
      <router-view class="container"></router-view>
    </transition>
    <mu-back-top :height="50"/>
  </div>
</template>

<script>
  import AppFooter from './components/app-footer';
  import AppHeader from './components/app-header';

  export default {
    name: 'app',
    components: {AppFooter, AppHeader}
  }
</script>

<style lang="less">
  @import '~normalize.css';
  @import "~animate.css";
  body, html {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      text-align: center;
      color: #2c3e50;
      .container {
        padding: 0 1rem;
        position:absolute;
        width:100%;
        height:100%;
      }
    }

  }


</style>
