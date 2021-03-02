<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="circle">
      <img src="../assets/img/shape.png" alt="" />
    </div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Services />
    <Prices />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navigation/Navbar.vue';
import Hero from '@/components/Hero/Hero.vue';
import AboutUs from '@/components/AboutUs/AboutUs.vue';
import Services from '@/components/OurServices/Services.vue';
import Prices from '@/components/Prices/Prices.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    AboutUs,
    Services,
    Prices,
  },
};
</script>
