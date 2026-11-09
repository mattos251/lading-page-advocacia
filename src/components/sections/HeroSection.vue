<script setup>
import { buildWhatsappUrl } from '../../utils/whatsapp'
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero-image" role="img" aria-label="Ambiente profissional elegante"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <div class="eyebrow"><span></span> DIREITO PREVIDENCIÁRIO E ASSISTENCIAL</div>
      <h1>Por trás de cada direito,<br /><em>existe uma história.</em></h1>
      <p class="hero-lead">Orientação jurídica individualizada para compreender seus direitos e avaliar os caminhos possíveis para o seu caso.</p>
      <a class="button button-gold" :href="buildWhatsappUrl('Olá! Gostaria de saber mais sobre a análise do meu caso previdenciário.')" target="_blank" rel="noopener noreferrer">
        <span class="whatsapp-icon" aria-hidden="true">◔</span> Saiba se você tem direito <span class="arrow">↗</span>
      </a>
      <div class="hero-points">
        <div><span class="point-icon" aria-hidden="true">◇</span><span>Atendimento<br />em todo o Brasil</span></div>
        <div><span class="point-icon" aria-hidden="true">◎</span><span>Análise individual<br />do seu caso</span></div>
        <div><span class="point-icon" aria-hidden="true">⚖</span><span>Atuação ética<br />e responsável</span></div>
      </div>
    </div>
    <div class="hero-stamp" aria-hidden="true"><span>AC</span><small>Direitos com<br />atenção e cuidado</small></div>
  </section>
</template>

<style scoped>
.hero { min-height: 570px; position: relative; isolation: isolate; overflow: hidden; color: #fff7ed; display: flex; align-items: center; background: var(--brown-deep); }
.hero-image { position: absolute; inset: 0 0 0 36%; z-index: -2; background-image: url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85'); background-position: center 40%; background-size: cover; filter: saturate(.7); }
.hero-overlay { position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, rgba(48,23,14,1) 0%, rgba(62,30,17,.97) 37%, rgba(62,30,17,.58) 61%, rgba(43,20,12,.12) 100%), linear-gradient(0deg, rgba(44,20,12,.34), transparent 50%); }
.hero-content { padding-top: 72px; padding-bottom: 58px; position: relative; }
.eyebrow { display: flex; align-items: center; gap: 12px; font-size: 10px; letter-spacing: 2.1px; font-weight: 700; color: var(--gold-light); }
.eyebrow span { width: 36px; height: 1px; background: var(--gold); }
.hero h1 { font-family: var(--serif); font-size: clamp(42px, 5.4vw, 69px); line-height: 1.07; letter-spacing: -.9px; font-weight: 600; max-width: 650px; margin: 23px 0 18px; }
.hero h1 em { color: var(--gold-light); font-weight: 500; }
.hero-lead { font-size: 16px; line-height: 1.7; max-width: 490px; color: #f1e5d9; margin: 0 0 26px; }
.button-gold { color: var(--brown-deep); background: linear-gradient(135deg, #f5d9ac, #c99852); box-shadow: 0 6px 18px #1d0d0838; }
.hero-points { display: flex; flex-wrap: wrap; gap: 27px; margin-top: 40px; }
.hero-points > div { display: flex; align-items: center; gap: 10px; font-size: 11px; line-height: 1.45; color: #f4e7da; }
.point-icon { color: var(--gold-light); font-size: 30px; font-family: var(--serif); }
.hero-stamp { position: absolute; right: 5%; bottom: 28px; display: flex; align-items: center; gap: 10px; color: #fff2df; border-left: 1px solid var(--gold); padding-left: 14px; opacity: .9; }
.hero-stamp > span { font-family: var(--serif); font-size: 30px; color: var(--gold-light); }
.hero-stamp small { font-size: 10px; line-height: 1.5; letter-spacing: .4px; }

@media (max-width: 1000px) {
  .hero-stamp { display: none; }
}
@media (max-width: 760px) {
  .hero { min-height: 690px; align-items: flex-end; }
  .hero-image { inset: 0; background-position: 57% center; opacity: .72; }
  .hero-overlay { background: linear-gradient(0deg, rgba(43,19,11,.98) 0%, rgba(49,23,13,.89) 48%, rgba(49,23,13,.15) 100%); }
  .hero-content { padding-top: 250px; padding-bottom: 34px; }
  .hero h1 { font-size: clamp(38px, 11vw, 54px); margin-top: 16px; }
  .hero-lead { font-size: 14px; line-height: 1.65; }
  .hero-points { gap: 13px 18px; margin-top: 27px; }
  .hero-points > div { font-size: 10px; }
  .point-icon { font-size: 25px; }
}
</style>
