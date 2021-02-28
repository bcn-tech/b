<template>
  <section id="about-us">
    <div class="container mb-5">
      <div class="image">
        <img
          src="../../assets/img/remote-ideation.png"
          alt="Ideias no trabalho"
        />
      </div>
      <div class="content">
        <h2 class="title">Equipe profissional e apaixonada pelo o que faz</h2>
        <p class="subtitle">
          A nossa equipe é formada por prossionais extremamente renomados e
          capacitados, tudo isso para oferecer serviços de qualidade que atendam
          as necessiadades de nossos clientes.
        </p>
      </div>
    </div>
    <div class="container mb-5">
      <div class="content">
        <h2 class="title">Comprometidos com os melhores resultados</h2>
        <p class="subtitle">
          Estamos sempre em busca de obter os melhores resultados possíveis para
          os nossos clientes, assegurando a qualidade de nossos serviços.
        </p>
      </div>
      <div class="image">
        <img
          src="../../assets/img/discuss-product-requirements.png"
          alt="Ideias no trabalho"
        />
      </div>
    </div>
    <div class="container">
        <div class="image">
        <img
          src="../../assets/img/survey.png"
          alt="Ideias no trabalho"
        />
      </div>
      <div class="content">
        <h2 class="title">Comprometidos com os melhores resultados</h2>
        <p class="subtitle">
          Estamos sempre em busca de obter os melhores resultados possíveis para
          os nossos clientes, assegurando a qualidade de nossos serviços.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style lang="scss">
@import "../../assets/styles/scss/layout";

#about-us {
    .container {
        .content {
            max-width: 450px;
        }
    }
}
</style>
