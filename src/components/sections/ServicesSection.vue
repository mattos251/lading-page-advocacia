<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import { services } from '../../data/content'
import { buildWhatsappUrl } from '../../utils/whatsapp'
</script>

<template>
  <section id="atuacao" class="section services-section">
    <div class="container">
      <SectionHeading
        kicker="COMO POSSO ORIENTAR VOCÊ"
        title="Áreas de atuação"
        description="Atuação jurídica em demandas previdenciárias e assistenciais, com atenção às particularidades de cada história."
      />
      <div class="service-grid">
        <article v-for="(service, index) in services" :key="service.title" class="service-card">
          <div class="service-icon" :class="{ 'service-icon--large': service.largeIcon }" aria-hidden="true">{{ service.icon }}</div>
          <span class="service-number" aria-hidden="true">0{{ index + 1 }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <a :href="buildWhatsappUrl(`Olá! Gostaria de informações sobre ${service.title}.`)" target="_blank" rel="noopener noreferrer" class="text-link">Entenda as possibilidades <span aria-hidden="true">↗</span></a>
        </article>
      </div>
      <p class="legal-note">A possibilidade de concessão depende da análise dos requisitos legais e das circunstâncias de cada caso.</p>
    </div>
  </section>
</template>

<style scoped>
.services-section { background: radial-gradient(ellipse at top, #fffaf3, var(--cream) 75%); }
.service-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 17px; }
.service-card { background: rgba(255,255,255,.62); border: 1px solid #e6d6c4; border-radius: 7px; padding: 27px 23px 25px; min-height: 310px; box-shadow: 0 12px 30px rgba(73,39,22,.055); position: relative; transition: transform .25s, border-color .25s; }
.service-card:hover { transform: translateY(-5px); border-color: var(--gold); }
.service-icon { width: 58px; height: 58px; display: grid; place-items: center; background: var(--brown); color: var(--gold-light); border-radius: 50%; font-size: 27px; margin-bottom: 22px; }
.service-icon--large { font-size: 33px; }
.service-number { position: absolute; top: 31px; right: 22px; color: #bca18a; font-family: var(--serif); font-size: 13px; }
.service-card h3 { font-family: var(--serif); font-size: 23px; margin: 0 0 12px; color: var(--brown-deep); }
.service-card p { color: #6c5547; font-size: 13px; line-height: 1.7; min-height: 110px; margin: 0 0 19px; }
.text-link { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; color: #8b592d; font-weight: 700; border-bottom: 1px solid #cba06a; padding-bottom: 5px; }
.text-link span { font-size: 16px; }
.legal-note { text-align: center; font-size: 11px; color: #8d796a; margin: 24px 0 0; }

@media (max-width: 1000px) {
  .service-grid { grid-template-columns: repeat(2, 1fr); }
  .service-card p { min-height: 75px; }
}
@media (max-width: 760px) {
  .service-grid { grid-template-columns: 1fr; gap: 12px; }
  .service-card { min-height: auto; padding: 23px; }
  .service-card p { min-height: auto; }
  .service-icon { margin-bottom: 14px; }
}
</style>
