<template>
  <section id="our-services">
    <div class="container">
      <div class="heading">
        <h2>Nossos serviços</h2>
      </div>
      <div class="cards-grid">
        <div class="card">
          <img
            class="responsive"
            src="../../assets/img/responsive.png"
            alt=""
          />
          <h3>Responsividade</h3>
          <p>
            Os nossos sistemas são 100% responsivos, ou seja, se adapatam a
            qualquer tipo de tela.
          </p>
        </div>

        <div class="card">
          <img
            class="performance"
            src="../../assets/img/performance.png"
            alt=""
          />
          <h3>Performance</h3>
          <p>
            Os nossos sistemas são estruturados de maneira otimizada e garante
            perfomance de alto nível.
          </p>
        </div>

        <div class="card">
          <img class="seo" src="../../assets/img/seo.png" alt="" />
          <h3>Otimização para SEO</h3>
          <p>
            Otimização de ponta para mecanismos de busca, garantindo uma ótima indexação na web.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
};
</script>
