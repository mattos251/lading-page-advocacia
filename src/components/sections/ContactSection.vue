<script setup>
import { buildWhatsappUrl } from '../../utils/whatsapp'
</script>

<template>
  <section id="contato" class="contact-section">
    <div class="container contact-panel">
      <div class="contact-symbol" aria-hidden="true">AC</div>
      <div class="contact-copy">
        <span class="section-kicker">ATENDIMENTO EM TODO O BRASIL</span>
        <h2>O primeiro passo é compreender o seu caso.</h2>
        <p>Entre em contato para obter informações sobre o atendimento e entender quais documentos podem ser relevantes
          para uma análise inicial.</p>
      </div>
      <a class="button button-dark"
        :href="buildWhatsappUrl('Olá, Arla Cristina! Gostaria de informações sobre atendimento previdenciário.')"
        target="_blank" rel="noopener noreferrer">
        <span class="whatsapp-icon" aria-hidden="true">◔</span> Fale pelo WhatsApp <span class="arrow"
          aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: #f9f2e9;
  padding: 48px 0;
}

.contact-panel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 27px;
  border: 1px solid #e4d2bd;
  border-radius: 10px;
  padding: 32px;
  background: #fffaf4;
  box-shadow: 0 15px 40px #4a29120b;
}

.contact-symbol {
  font-family: var(--serif);
  color: var(--gold);
  font-size: 43px;
  border-right: 1px solid #d9c1a5;
  padding-right: 25px;
}

.contact-copy .section-kicker {
  color: #9b6b36;
}

.contact-copy h2 {
  font-family: var(--serif);
  font-size: clamp(25px, 3vw, 34px);
  line-height: 1.14;
  color: var(--brown-deep);
  letter-spacing: -.5px;
  margin: 8px 0;
}

.contact-copy p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
  max-width: 600px;
  margin: 0;
}

.button-dark {
  background: var(--brown);
  color: #fff6ec;
  white-space: nowrap;
  padding: 17px 22px;
}

@media (max-width: 760px) {
  .contact-panel {
    grid-template-columns: 1fr;
    gap: 17px;
    padding: 25px 22px;
  }

  .contact-symbol {
    border-right: 0;
    border-bottom: 1px solid #d9c1a5;
    padding: 0 0 12px;
    width: fit-content;
  }

  .button-dark {
    justify-self: start;
    white-space: normal;
  }
}
</style>
