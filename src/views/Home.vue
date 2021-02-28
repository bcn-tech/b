<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navbar />
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navigation/Navbar.vue';
import Hero from '@/components/Hero/Hero.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
  },
};
</script>
