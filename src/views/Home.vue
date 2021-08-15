<template>
 <Map /> 
 <!-- :coords="coords" -->
</template>
<script>
  import Map from '../components/Map.vue'
export default {
  name: "Home",
  data(){
    return {
      coords: {}
    }
  },
  components: {
    Map
  },
};
</script>

<style lang="scss" scoped >
h1{
  max-width: 100px;
  margin-left: auto;
}
  div{
    padding: 10px;
    overflow: hidden;
  }
</style>
