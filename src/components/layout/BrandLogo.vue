<script setup>
defineProps({
  variant: {
    type: String,
    default: 'header',
    validator: (value) => ['header', 'footer'].includes(value)
  }
})
</script>

<template>
  <a class="brand" :class="`brand--${variant}`" href="#inicio" aria-label="Arla Cristina, início">
    <span class="brand-mark" aria-hidden="true"><span>A</span><span>C</span></span>
    <span class="brand-copy">
      <strong>Arla Cristina</strong>
      <small>ADVOGADA PREVIDENCIÁRIA</small>
    </span>
  </a>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;
  color: inherit;
  text-decoration: none;
}

.brand-mark {
  width: 54px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--gold-light);
  font-family: var(--montse);
  font-weight: 300;
  font-size: 34px;
  letter-spacing: -17px;
  padding-right: 15px;
}

.brand-mark span:last-child {
  transform: translateY(4px);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand-copy strong {
  font-family: var(--montse);
  font-weight: 400;
  font-size: 25px;
  line-height: 1.05;
}

.brand-copy small {
  font-size: 9px;
  font-family: var(--montse);
  font-weight: 300;
  letter-spacing: 2px;
}

.brand--footer .brand-copy strong {
  font-size: 22px;
}

@media (max-width: 1000px) {
  .brand-copy strong {
    font-size: 22px;
  }

  .brand-mark {
    width: 45px;
    font-size: 30px;
  }
}

@media (max-width: 760px) {
  .brand-copy strong {
    font-size: 20px;
  }

  .brand-copy small {
    font-size: 7px;
    letter-spacing: 1.3px;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    font-size: 28px;
  }
}
</style>
