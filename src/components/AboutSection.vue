<script setup>
import { skills } from '../data'
</script>

<template>
  <section id="sobre" class="bg-[#1f2229] px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-6xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="flex justify-center">
          <img src="/img/101291937.png" alt="Foto de Ramon Chuinca"
            class="aspect-square w-64 rounded-full border-4 border-brand object-cover shadow-2xl shadow-brand/10 transition duration-500 hover:scale-105 sm:w-80 lg:w-96" />
        </div>
        <div>
          <h2 class="text-3xl font-extrabold uppercase sm:text-4xl">Sobre <span class="text-brand">mim</span></h2>
          <div class="mt-6 space-y-4 text-slate-300">
            <p>Sou desenvolvedor Front-End com mais de dois anos de experiência e conhecimentos sólidos em
              <span class="font-semibold text-brand">HTML, CSS, JavaScript, PHP, Laravel, Vue.js, MySQL e Docker</span>.</p>
            <p>Desde que comecei na programação, me dedico a aprimorar minhas habilidades aplicando-as em projetos reais, contribuindo com soluções web dinâmicas e eficientes e colaborando com equipes multifuncionais.</p>
            <p>Gosto de aprender novas tecnologias e de desafios que expandam meu conhecimento. Será um prazer contribuir com a sua equipe.</p>
          </div>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="s in skills" :key="s" class="rounded-lg border border-brand/30 bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand">{{ s }}</span>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-6 lg:grid-cols-2">
        <article class="rounded-2xl border border-white/10 bg-panel p-6">
          <h3 class="text-lg font-bold uppercase tracking-wide text-brand">Objetivo profissional</h3>
          <p class="mt-4 text-slate-300">Atuar como Desenvolvedor Front-End ou Desenvolvedor Web, contribuindo para a criação, evolução e manutenção de aplicações web. Busco aplicar minha experiência prática, conhecimentos técnicos e capacidade de resolução de problemas em projetos desafiadores, além de continuar evoluindo profissionalmente e acompanhando as novas tecnologias do mercado.</p>
        </article>
        <article class="rounded-2xl border border-white/10 bg-panel p-6">
          <h3 class="text-lg font-bold uppercase tracking-wide text-brand">Resumo profissional</h3>
          <div class="mt-4 space-y-3 text-slate-300">
            <p>Desenvolvedor Web com quase 3 anos de experiência profissional na área de desenvolvimento de software, atuando na criação, implementação e manutenção de páginas e aplicações web.</p>
            <p>Possuo conhecimentos em HTML5, CSS3, JavaScript, PHP, Laravel, Vue.js, React.js, Node.js, Bootstrap e Tailwind CSS, além de conhecimentos em bancos de dados relacionais, especialmente MySQL.</p>
            <p>Minha experiência profissional, aliada à formação em Análise e Desenvolvimento de Sistemas, proporciona uma visão técnica e prática sobre desenvolvimento de soluções digitais.</p>
            <p>Também possuo experiência anterior em suporte técnico e atendimento ao cliente, desenvolvendo habilidades de comunicação, trabalho em equipe, análise e resolução de problemas.</p>
            <p>Sou comprometido com a qualidade das entregas, aprendizado contínuo e evolução profissional, buscando contribuir ativamente para os resultados das equipes e dos projetos em que atuo.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
