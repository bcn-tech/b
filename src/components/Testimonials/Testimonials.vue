<template>
  <section id="testimonials">
    <div class="container">
      <div class="heading">
        <h2>Testemunhos</h2>
      </div>
    </div>
    <Carousel />
  </section>
</template>

<script>
import Carousel from './Carousel.vue';

export default {
  name: 'Testimonials',
  components: {
    Carousel,
  },
};
</script>
