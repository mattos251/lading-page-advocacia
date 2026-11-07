<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const whatsappNumber = '' // Informe o número com DDI e DDD, somente números. Ex.: 5511999999999

const services = [
  {
    icon: '♿',
    title: 'BPC / LOAS',
    description: 'Orientação sobre o benefício assistencial destinado à pessoa idosa ou à pessoa com deficiência que atenda aos critérios legais.'
  },
  {
    icon: '♡',
    title: 'Salário-maternidade',
    description: 'Análise individualizada para gestantes, mães e pessoas que se enquadrem nas hipóteses previstas na legislação.'
  },
  {
    icon: '⚒',
    title: 'Auxílio-acidente',
    description: 'Avaliação de situações em que sequelas de acidente possam reduzir a capacidade para o trabalho habitual.'
  },
  {
    icon: '✚',
    title: 'Benefícios por incapacidade',
    description: 'Orientação jurídica para casos de incapacidade temporária ou permanente para o trabalho, conforme os requisitos legais.'
  }
]

const testimonials = [
  'Recebi orientações claras e fui informada sobre cada etapa do atendimento.',
  'Fui acolhida com atenção e consegui entender melhor as possibilidades do meu caso.',
  'Atendimento cuidadoso, com explicações objetivas e acompanhamento durante o processo.'
]

function contactLink(message = 'Olá! Gostaria de obter informações sobre atendimento previdenciário.') {
  const text = encodeURIComponent(message)
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Arla Cristina, início" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true"><span>A</span><span>C</span></span>
        <span class="brand-copy">
          <strong>Arla Cristina</strong>
          <small>ADVOCACIA PREVIDENCIÁRIA</small>
        </span>
      </a>

      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Abrir menu" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': menuOpen }">
        <a href="#inicio" @click="closeMenu">Início</a>
        <a href="#atuacao" @click="closeMenu">Áreas de atuação</a>
        <a href="#sobre" @click="closeMenu">Sobre</a>
        <a href="#diferenciais" @click="closeMenu">Como atuo</a>
        <a href="#contato" @click="closeMenu">Contato</a>
        <a class="nav-cta" :href="contactLink()" target="_blank" rel="noopener noreferrer" @click="closeMenu">
          <span class="whatsapp-icon">◔</span> Fale pelo WhatsApp
        </a>
      </nav>
    </header>

    <main>
      <section id="inicio" class="hero">
        <div class="hero-image" role="img" aria-label="Ambiente profissional elegante"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content container">
          <div class="eyebrow"><span></span> DIREITO PREVIDENCIÁRIO E ASSISTENCIAL</div>
          <h1>Por trás de cada direito,<br /><em>existe uma história.</em></h1>
          <p class="hero-lead">Orientação jurídica individualizada para compreender seus direitos e avaliar os caminhos possíveis para o seu caso.</p>
          <a class="button button-gold" :href="contactLink('Olá! Gostaria de saber mais sobre a análise do meu caso previdenciário.')" target="_blank" rel="noopener noreferrer">
            <span class="whatsapp-icon">◔</span> Saiba se você tem direito <span class="arrow">↗</span>
          </a>
          <div class="hero-points">
            <div><span class="point-icon">◇</span><span>Atendimento<br />em todo o Brasil</span></div>
            <div><span class="point-icon">◎</span><span>Análise individual<br />do seu caso</span></div>
            <div><span class="point-icon">⚖</span><span>Atuação ética<br />e responsável</span></div>
          </div>
        </div>
        <div class="hero-stamp" aria-hidden="true"><span>AC</span><small>Direitos com<br />atenção e cuidado</small></div>
      </section>

      <section id="atuacao" class="section services-section">
        <div class="container">
          <div class="section-heading">
            <span class="section-kicker">COMO POSSO ORIENTAR VOCÊ</span>
            <h2>Áreas de atuação</h2>
            <p>Atuação jurídica em demandas previdenciárias e assistenciais, com atenção às particularidades de cada história.</p>
          </div>
          <div class="service-grid">
            <article v-for="(service, index) in services" :key="service.title" class="service-card">
              <div class="service-icon" :class="{ 'service-icon-heart': index === 1 }">{{ service.icon }}</div>
              <span class="service-number">0{{ index + 1 }}</span>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <a :href="contactLink(`Olá! Gostaria de informações sobre ${service.title}.`)" target="_blank" rel="noopener noreferrer" class="text-link">Entenda as possibilidades <span>↗</span></a>
            </article>
          </div>
          <p class="legal-note">A possibilidade de concessão depende da análise dos requisitos legais e das circunstâncias de cada caso.</p>
        </div>
      </section>

      <section id="sobre" class="section about-section">
        <div class="container about-layout">
          <div class="about-visual">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=85" alt="Livros e símbolos da área jurídica sobre uma mesa" loading="lazy" />
            <div class="about-badge"><span>AC</span><small>Arla Cristina<br />Advocacia Previdenciária</small></div>
          </div>
          <div class="about-copy">
            <span class="section-kicker">CONHEÇA MEU TRABALHO</span>
            <h2>Uma atuação técnica, próxima e comprometida com a sua história.</h2>
            <p>Sou <strong>Arla Cristina</strong>, advogada com atuação em Direito Previdenciário e Assistencial. Meu trabalho é orientar cada pessoa com clareza, responsabilidade e atenção às particularidades de sua realidade.</p>
            <p>Acredito que compreender os direitos é um passo importante para tomar decisões conscientes. Por isso, cada atendimento começa pela escuta e pela análise individual do caso.</p>
            <div class="signature">Arla Cristina <span>Advocacia Previdenciária</span></div>
            <a class="button button-outline" href="#contato">Conheça os canais de atendimento <span class="arrow">↗</span></a>
          </div>
        </div>
      </section>

      <section id="diferenciais" class="values-section">
        <div class="container values-grid">
          <div class="value-item"><span class="value-icon">✳</span><div><h3>Escuta atenta</h3><p>Compreensão da sua realidade antes de orientar os próximos passos.</p></div></div>
          <div class="value-item"><span class="value-icon">⚖</span><div><h3>Análise responsável</h3><p>Avaliação técnica dos documentos e dos requisitos aplicáveis.</p></div></div>
          <div class="value-item"><span class="value-icon">↗</span><div><h3>Clareza no processo</h3><p>Informações objetivas sobre etapas, possibilidades e limites.</p></div></div>
        </div>
      </section>

      <section class="section testimonials-section">
        <div class="container">
          <div class="section-heading light-heading">
            <span class="section-kicker">CUIDADO EM CADA ETAPA</span>
            <h2>Atendimento com clareza e respeito</h2>
            <p>Uma relação profissional pautada pela informação, pelo diálogo e pela responsabilidade.</p>
          </div>
          <div class="testimonial-grid">
            <article v-for="(testimonial, index) in testimonials" :key="testimonial" class="testimonial-card">
              <span class="quote-mark">“</span>
              <p>{{ testimonial }}</p>
              <span class="testimonial-label">Experiência de atendimento {{ index + 1 }}</span>
            </article>
          </div>
          <p class="testimonial-disclaimer">Os textos acima são exemplos de layout. Substitua-os por depoimentos reais somente se a divulgação for permitida pelas normas profissionais aplicáveis.</p>
        </div>
      </section>

      <section id="contato" class="contact-section">
        <div class="container contact-panel">
          <div class="contact-symbol">AC</div>
          <div class="contact-copy">
            <span class="section-kicker">ATENDIMENTO EM TODO O BRASIL</span>
            <h2>O primeiro passo é compreender o seu caso.</h2>
            <p>Entre em contato para obter informações sobre o atendimento e entender quais documentos podem ser relevantes para uma análise inicial.</p>
          </div>
          <a class="button button-dark" :href="contactLink('Olá, Arla Cristina! Gostaria de informações sobre atendimento previdenciário.')" target="_blank" rel="noopener noreferrer">
            <span class="whatsapp-icon">◔</span> Fale pelo WhatsApp <span class="arrow">↗</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-main">
        <a class="brand footer-brand" href="#inicio">
          <span class="brand-mark" aria-hidden="true"><span>C</span><span>C</span></span>
          <span class="brand-copy"><strong>Arla Cristina</strong><small>ADVOCACIA PREVIDENCIÁRIA</small></span>
        </a>
        <div class="footer-detail"><span>⌖</span><p>Atendimento<br />em todo o Brasil</p></div>
        <div class="footer-detail"><span>✉</span><p>Contato profissional<br /><a :href="contactLink()" target="_blank" rel="noopener noreferrer">WhatsApp</a></p></div>
        <div class="footer-oab">OAB/UF: <strong>[inserir número]</strong></div>
      </div>
      <div class="footer-bottom"><div class="container"><span>© {{ new Date().getFullYear() }} Arla Cristina — Advocacia Previdenciária</span><span>Conteúdo informativo. Cada caso exige análise individual.</span></div></div>
    </footer>
  </div>
</template>
