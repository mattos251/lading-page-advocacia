<script setup>
import { values } from '../../data/content'
</script>

<template>
  <section id="diferenciais" class="values-section">
    <div class="container values-grid">
      <div v-for="value in values" :key="value.title" class="value-item">
        <span class="value-icon" aria-hidden="true">{{ value.icon }}</span>
        <div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section { background: var(--brown); color: #fff4e8; padding: 35px 0; }
.values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 35px; }
.value-item { display: flex; gap: 16px; align-items: flex-start; padding: 7px 18px; border-right: 1px solid rgba(232,190,127,.35); }
.value-item:last-child { border-right: 0; }
.value-icon { font-size: 33px; color: var(--gold-light); font-family: var(--serif); }
.value-item h3 { font-family: var(--serif); font-size: 18px; margin: 0 0 7px; color: #fff0dd; }
.value-item p { margin: 0; color: #e4cdb8; font-size: 12px; line-height: 1.6; }

@media (max-width: 760px) {
  .values-grid { grid-template-columns: 1fr; gap: 18px; }
  .value-item { border-right: 0; border-bottom: 1px solid rgba(232,190,127,.25); padding: 0 0 18px; }
  .value-item:last-child { border-bottom: 0; padding-bottom: 0; }
}
</style>
