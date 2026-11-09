<template>
  <section id="sobre" class="section about-section">
    <div class="container about-layout">
      <div class="about-visual">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=85"
          alt="Livros e símbolos da área jurídica sobre uma mesa" loading="lazy" />
        <div class="about-badge" aria-hidden="true"><span>AC</span><small>Arla Cristina<br />Advogada
            Previdenciária</small></div>
      </div>
      <div class="about-copy">
        <span class="section-kicker">CONHEÇA MEU TRABALHO</span>
        <h2>Uma atuação técnica, próxima e comprometida com a sua história.</h2>
        <p>Sou <strong>Arla Cristina</strong>, advogada com atuação em Direito Previdenciário e Assistencial. Meu
          trabalho é orientar cada pessoa com clareza, responsabilidade e atenção às particularidades de sua realidade.
        </p>
        <p>Acredito que compreender os direitos é um passo importante para tomar decisões conscientes. Por isso, cada
          atendimento começa pela escuta e pela análise individual do caso.</p>
        <div class="signature">Arla Cristina <span>Advogada Previdenciária</span></div>
        <a class="button button-outline" href="#contato">Conheça os canais de atendimento <span class="arrow"
            aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: #eee0d0;
}

.about-layout {
  display: grid;
  grid-template-columns: .92fr 1.08fr;
  gap: clamp(35px, 7vw, 95px);
  align-items: center;
}

.about-visual {
  position: relative;
  min-height: 480px;
}

.about-visual::before {
  content: "";
  position: absolute;
  inset: -16px 24px 18px -16px;
  border: 1px solid #bd8b4f;
  z-index: 0;
}

.about-visual img {
  width: 100%;
  height: 480px;
  display: block;
  object-fit: cover;
  position: relative;
  z-index: 1;
  filter: sepia(.15) saturate(.8);
}

.about-badge {
  position: absolute;
  z-index: 2;
  right: -28px;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: var(--brown-deep);
  color: white;
  box-shadow: 0 12px 25px #2a130d30;
}

.about-badge span {
  color: var(--gold-light);
  font-family: var(--montse);
  font-size: 30px;
}

.about-badge small {
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: .4px;
}

.about-copy .section-kicker {
  color: #99672f;
}

.about-copy h2 {
  font-family: var(--montse);
  font-size: clamp(32px, 3.5vw, 43px);
  line-height: 1.14;
  color: var(--brown-deep);
  letter-spacing: -.5px;
  margin: 17px 0 22px;
}

.about-copy p {
  color: #634c3e;
  font-size: 14px;
  line-height: 1.9;
  margin: 0 0 14px;
}

.signature {
  font-family: var(--montse);
  font-weight: 300;
  font-style: italic;
  font-size: 26px;
  color: var(--brown);
  margin: 25px 0 22px;
}

.signature span {
  display: block;
  font-family: var(--montse);
  font-weight: 300;
  font-style: normal;
  font-size: 9px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-top: 4px;
}

.button-outline {
  border: 1px solid #9e7449;
  color: var(--brown);
  padding: 13px 17px;
  font-size: 12px;
}

@media (max-width: 760px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .about-visual,
  .about-visual img {
    min-height: 320px;
    height: 320px;
  }

  .about-visual {
    margin-right: 12px;
  }

  .about-badge {
    right: -12px;
    bottom: 18px;
  }

  .about-copy h2 {
    font-size: 32px;
  }
}
</style>
