<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="circle">
      <img src="../assets/img/shape.png" alt="" />
    </div>
    <Navbar />
    <Hero />
    <AboutUs />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navigation/Navbar.vue';
import Hero from '@/components/Hero/Hero.vue';
import AboutUs from '@/components/AboutUs/AboutUs.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    AboutUs,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/scss/mixins";

.home {
  max-width: $container-xl;
  margin: 0 auto;
  position: relative;
}

.circle {
  img {
    right: -15%;
    top: -10%;
    position: absolute;
    max-width: 1000px;
    z-index: -1;
  }
}
</style>
