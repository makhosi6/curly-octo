<template>
  <div class="mobile-nav">
    <md-bottom-bar class="md-accent md-elevation-0" >
      <md-bottom-bar-item
        id="bottom-bar-item-home"
        md-label="Home"
        md-icon="home"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        id="bottom-bar-item-support"
        md-label="Support"
        md-icon="support"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        id="bottom-bar-item-notifications"
        md-label="Notifications"
        md-icon="notifications"
      ></md-bottom-bar-item>
      <md-bottom-bar-item id="bottom-bar-item-messages" md-label="Messages">
        <md-badge md-content="10" md-position="bottom" md-dense>
          <md-icon>mail</md-icon>
        </md-badge>
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: "BottomNav",

};
</script>

<style lang="scss">
.mobile-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px !important;
  background-color: #fff;
  z-index: 1 !important;
  div {
    max-width: 422px;
    margin: auto;
  }
}
</style>
