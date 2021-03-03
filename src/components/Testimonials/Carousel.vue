<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="card">
        <img src="../../assets/img/user-1.png" alt="" />
        <h3>John Snow</h3>
        <p>
          Empresa muito competente ! Sempre pensando na qualidade e na
          satisfação de seus clientes, recomendo muito !
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="../../assets/img/user-1.png" alt="" />
        <h3>John Snow</h3>
        <p>
          Empresa muito competente ! Sempre pensando na qualidade e na
          satisfação de seus clientes, recomendo muito !
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="../../assets/img/user-1.png" alt="" />
        <h3>John Snow</h3>
        <p>
          Empresa muito competente ! Sempre pensando na qualidade e na
          satisfação de seus clientes, recomendo muito !
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="../../assets/img/user-1.png" alt="" />
        <h3>John Snow</h3>
        <p>
          Empresa muito competente ! Sempre pensando na qualidade e na
          satisfação de seus clientes, recomendo muito !
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="../../assets/img/user-1.png" alt="" />
        <h3>John Snow</h3>
        <p>
          Empresa muito competente ! Sempre pensando na qualidade e na
          satisfação de seus clientes, recomendo muito !
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="../../assets/img/user-1.png" alt="" />
        <h3>John Snow</h3>
        <p>
          Empresa muito competente ! Sempre pensando na qualidade e na
          satisfação de seus clientes, recomendo muito !
        </p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'swiper-example-loop-group',
  title: 'Loop mode with multiple slides per group',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>
