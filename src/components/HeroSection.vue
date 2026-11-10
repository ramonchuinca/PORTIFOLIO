<template>
  <section id="home" class="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pt-24 text-center sm:px-6">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/img/template.jpg')"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/40 to-ink"></div>
    <div class="relative z-10 mx-auto max-w-3xl">
      <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-ink/60 px-3 py-1 text-xs font-semibold text-brand backdrop-blur">
        <span class="h-2 w-2 animate-pulse rounded-full bg-brand"></span> Disponível para novos projetos
      </p>
      <h1 class="text-4xl font-extrabold uppercase tracking-wide drop-shadow sm:text-6xl lg:text-7xl">Ramon <span class="text-brand">Chuinca</span></h1>
      <h2 class="mt-3 text-xl font-semibold uppercase tracking-widest drop-shadow sm:text-3xl">Programador <span class="text-brand">Front-End</span></h2>
      <p class="mx-auto mt-6 max-w-xl text-slate-200">
        Interfaces web rápidas, responsivas e bem cuidadas com Vue.js, Laravel, PHP, Docker e inteligência artificial.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink to="/#projetos" class="rounded-xl bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110">Ver projetos</RouterLink>
        <RouterLink to="/#contato" class="rounded-xl border border-white/30 bg-ink/40 px-6 py-3 font-semibold backdrop-blur transition hover:border-brand hover:text-brand">Fale comigo</RouterLink>
      </div>
    </div>
  </section>
</template>
