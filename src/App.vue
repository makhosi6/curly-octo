<template>
  <div id="app">
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/messages">Messages</router-link>
    </div> 
    <mobile-wrapper v-if="hasLoaded" >
      <menu-top></menu-top>
      <router-view />
      <bottom-nav />
    </mobile-wrapper>
    <loader v-else />
  </div>
</template>

<script>
import BottomNav from "./components/bottomNav.vue";
import Loader from './components/Loader.vue';
import Menu from "./components/Menu.vue";
import MobileWrapper from "./components/MobileWrapper.vue";
export default {
  name: "App",
  data() {
    return {
      hasLoaded: false,
    };
  },
  created() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 5000);
  },
  components: {
    MobileWrapper,
    BottomNav,
    "menu-top": Menu,
    Loader

  },
};
</script>
<style lang="scss">
</style>
