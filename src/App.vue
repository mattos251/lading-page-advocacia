<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ValuesSection from './components/sections/ValuesSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Pular para o conteúdo</a>
    <AppHeader />

    <main id="main-content">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ValuesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

