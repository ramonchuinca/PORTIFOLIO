<script setup>
import { ref } from 'vue'
import { links } from '../data'
const open = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <RouterLink to="/#home" class="text-lg font-extrabold uppercase tracking-wide">Portfo<span class="text-brand">lio</span></RouterLink>
      <nav class="hidden gap-8 md:flex">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="text-sm font-medium text-slate-300 transition hover:text-brand">{{ l.label }}</RouterLink>
      </nav>
      <button @click="open = !open" class="rounded-lg border border-white/15 p-2 md:hidden" aria-label="Abrir menu">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path v-if="!open" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
    <nav v-if="open" class="border-t border-white/10 bg-ink px-4 pb-4 md:hidden">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to" @click="open = false" class="block py-3 text-slate-200 hover:text-brand">{{ l.label }}</RouterLink>
    </nav>
  </header>
</template>
