<script setup>
import { socials } from '../data'
// Após o envio, o formsubmit redireciona para a página de obrigado.
const next = `${window.location.origin}/obrigado`
</script>

<template>
  <section id="contato" class="px-4 py-20 sm:px-6">
    <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold sm:text-4xl">Fale <span class="text-brand">comigo</span></h2>
        <p class="mt-4 text-slate-400">Entre em contato pelas redes sociais ou me envie uma mensagem.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener"
            :class="['rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110', s.cls]">{{ s.name }}</a>
        </div>
      </div>
      <form action="https://formsubmit.co/ec2697196884c9d1076e4a7027f49848" method="POST"
        class="space-y-4 rounded-2xl border border-white/10 bg-panel p-6">
        <div>
          <label for="nome" class="mb-1 block text-sm text-slate-300">Nome</label>
          <input id="nome" name="name" required class="w-full rounded-lg border border-white/10 bg-ink px-4 py-2.5 outline-none focus:border-brand" />
        </div>
        <div>
          <label for="email" class="mb-1 block text-sm text-slate-300">E-mail</label>
          <input id="email" type="email" name="email" required class="w-full rounded-lg border border-white/10 bg-ink px-4 py-2.5 outline-none focus:border-brand" />
        </div>
        <div>
          <label for="msg" class="mb-1 block text-sm text-slate-300">Mensagem</label>
          <textarea id="msg" name="message" rows="4" required class="w-full rounded-lg border border-white/10 bg-ink px-4 py-2.5 outline-none focus:border-brand"></textarea>
        </div>
        <input type="hidden" name="_next" :value="next" />
        <button class="w-full rounded-lg bg-brand py-3 font-semibold text-ink transition hover:brightness-110">Enviar mensagem</button>
      </form>
    </div>
  </section>
</template>
