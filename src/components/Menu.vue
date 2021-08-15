<template>
  <div>
    <div class="menu">
      <md-button @click="toogle" class="md-icon-button md-raised md-accent">
        <md-icon>menu</md-icon>
      </md-button>
    </div>
    <md-drawer class="drawer" :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-subheading">Navigation</span>
        <div class="md-toolbar-section-end">
          <md-button
            class="md-icon-button md-dense"
            @click="showNavigation = false"
          >
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>
        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>
        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>
        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      showNavigation: false,
    };
  },
  methods: {
    toogle() {
      this.showNavigation = !this.showNavigation;
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 20px;
}
.drawer {
  max-height: 100vh !important;
  position: fixed !important;
  top: 0;
  left: 0;
}
</style>