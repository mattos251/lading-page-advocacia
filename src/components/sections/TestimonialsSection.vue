<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import { testimonials } from '../../data/content'
</script>

<template>
  <section class="section testimonials-section">
    <div class="container">
      <SectionHeading light kicker="CUIDADO EM CADA ETAPA" title="Atendimento com clareza e respeito"
        description="Uma relação profissional pautada pela informação, pelo diálogo e pela responsabilidade." />
      <div class="testimonial-grid">
        <article v-for="(testimonial, index) in testimonials" :key="testimonial" class="testimonial-card">
          <span class="quote-mark" aria-hidden="true">“</span>
          <p>{{ testimonial }}</p>
          <span class="testimonial-label">Experiência de atendimento {{ index + 1 }}</span>
        </article>
      </div>
      <p class="testimonial-disclaimer">Os textos acima são exemplos de layout. Substitua-os por depoimentos reais
        somente se a divulgação for permitida pelas normas profissionais aplicáveis.</p>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background: linear-gradient(125deg, #32180f, #633822);
  color: white;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.testimonial-card {
  border: 1px solid rgba(226, 184, 126, .65);
  border-radius: 10px;
  padding: 25px 24px 22px;
  background: rgba(255, 255, 255, .045);
}

.quote-mark {
  font-family: var(--montse);
  font-weight: 300;
  font-size: 48px;
  line-height: .7;
  color: var(--gold-light);
  display: block;
}

.testimonial-card p {
  font-family: var(--montse);
  font-weight: 300;
  font-size: 17px;
  line-height: 1.65;
  min-height: 85px;
  margin: 12px 0 20px;
  color: #fff3e7;
}

.testimonial-label {
  color: #e5bd86;
  font-size: 10px;
  letter-spacing: .6px;
}

.testimonial-disclaimer {
  font-family: var(--montse);
  font-weight: 300;
  text-align: center;
  color: #c7a994;
  font-size: 10px;
  line-height: 1.5;
  max-width: 750px;
  margin: 23px auto 0;
}

@media (max-width: 760px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card p {
    min-height: 0;
  }
}
</style>
