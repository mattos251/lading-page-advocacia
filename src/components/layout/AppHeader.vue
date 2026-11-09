<script setup>
import { ref } from 'vue'
import BrandLogo from './BrandLogo.vue'
import { navLinks } from '../../data/content'
import { buildWhatsappUrl } from '../../utils/whatsapp'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <BrandLogo @click="closeMenu" />

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="menuOpen"
      :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
      aria-controls="main-nav"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span><span></span>
    </button>

    <nav id="main-nav" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navegação principal">
      <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
      <a class="nav-cta" :href="buildWhatsappUrl()" target="_blank" rel="noopener noreferrer" @click="closeMenu">
        <span class="whatsapp-icon" aria-hidden="true">◔</span> Fale pelo WhatsApp
      </a>
    </nav>
  </header>
</template>

<style scoped>
.site-header { min-height: 82px; padding: 14px max(24px, calc((100vw - 1240px)/2)); display: flex; align-items: center; justify-content: space-between; gap: 28px; background: var(--brown-deep); color: #fff8ee; position: sticky; top: 0; z-index: 20; border-bottom: 1px solid rgba(232,190,127,.24); }
.main-nav { display: flex; align-items: center; gap: clamp(14px, 2vw, 30px); font-size: 13px; }
.main-nav > a:not(.nav-cta) { transition: color .2s; }
.main-nav > a:not(.nav-cta):hover { color: var(--gold-light); }
.nav-cta { border: 1px solid var(--gold); border-radius: 999px; padding: 12px 17px; white-space: nowrap; font-weight: 600; }
.nav-cta:hover { background: rgba(201,154,88,.14); }
.menu-toggle { display: none; background: transparent; border: 0; padding: 8px; }
.menu-toggle span { display: block; width: 25px; height: 2px; background: white; margin: 5px; }

@media (max-width: 1000px) {
  .main-nav { gap: 13px; font-size: 12px; }
}
@media (max-width: 760px) {
  .site-header { padding: 12px 18px; min-height: 72px; }
  .menu-toggle { display: block; cursor: pointer; }
  .main-nav { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--brown-deep); padding: 16px 22px 22px; flex-direction: column; align-items: stretch; border-top: 1px solid #6a422c; box-shadow: 0 14px 20px #1e0d0880; }
  .main-nav.is-open { display: flex; }
  .main-nav > a:not(.nav-cta) { padding: 9px 0; }
  .nav-cta { text-align: center; margin-top: 5px; }
}
</style>
