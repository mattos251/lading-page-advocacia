<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  light: { type: Boolean, default: false }
})
</script>

<template>
  <div class="section-heading" :class="{ 'section-heading--light': light }">
    <span class="section-kicker">{{ kicker }}</span>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 42px;
}

.section-heading .section-kicker {
  justify-content: center;
  color: #9b6b36;
}

.section-heading h2 {
  font-family: var(--montse);
  font-weight: 300;
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.14;
  margin: 13px 0;
  color: var(--brown-deep);
  letter-spacing: -.5px;
}

.section-heading p {
  margin: 0 auto;
  max-width: 660px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.section-heading--light h2 {
  color: #fff4e8;
}

.section-heading--light p {
  color: #e2cbbb;
}

@media (max-width: 760px) {
  .section-heading {
    margin-bottom: 30px;
  }

  .section-heading h2 {
    font-size: 34px;
  }

  .section-heading p {
    font-size: 13px;
  }
}
</style>
