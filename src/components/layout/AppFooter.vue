<script setup>
import BrandLogo from './BrandLogo.vue'
import { buildWhatsappUrl } from '../../utils/whatsapp'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <BrandLogo variant="footer" />
      <div class="footer-detail"><span aria-hidden="true">⌖</span><p>Atendimento<br />em todo o Brasil</p></div>
      <div class="footer-detail"><span aria-hidden="true">✉</span><p>Contato profissional<br /><a :href="buildWhatsappUrl()" target="_blank" rel="noopener noreferrer">WhatsApp</a></p></div>
      <div class="footer-oab">OAB/UF: <strong>[inserir número]</strong></div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>© {{ year }} Arla Cristina — Advogada Previdenciária</span>
        <span>Conteúdo informativo. Cada caso exige análise individual.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--brown-deep); color: #f7e8d8; }
.footer-main { display: grid; grid-template-columns: 1.4fr .8fr .9fr auto; gap: 25px; align-items: center; padding-top: 35px; padding-bottom: 35px; }
.footer-detail { display: flex; gap: 10px; align-items: center; font-size: 11px; line-height: 1.6; color: #e4cbb5; }
.footer-detail > span { color: var(--gold-light); font-size: 25px; }
.footer-detail p { margin: 0; }
.footer-detail a { text-decoration: underline; text-underline-offset: 3px; }
.footer-oab { font-size: 10px; color: #d9bfa8; }
.footer-bottom { border-top: 1px solid #69422d; color: #bda18a; font-size: 10px; }
.footer-bottom .container { display: flex; justify-content: space-between; gap: 20px; padding-top: 14px; padding-bottom: 14px; }

@media (max-width: 1000px) {
  .footer-main { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 760px) {
  .footer-main { grid-template-columns: 1fr; gap: 22px; }
  .footer-bottom .container { flex-direction: column; gap: 8px; }
}
</style>
