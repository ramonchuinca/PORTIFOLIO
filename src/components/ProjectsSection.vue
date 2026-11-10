<script setup>
import { projects } from '../data'
</script>

<template>
  <section id="projetos" class="bg-panel/50 px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-3xl font-extrabold sm:text-4xl">Principais <span class="text-brand">projetos</span></h2>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="p in projects" :key="p.title"
          class="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink transition hover:-translate-y-1 hover:border-brand/60">
          <img v-if="p.image" :src="p.image" :alt="p.title" class="h-36 w-full object-cover" />
          <div v-else :class="['flex h-36 items-center justify-center bg-gradient-to-br text-5xl', p.grad]">{{ p.icon }}</div>
          <div class="flex flex-1 flex-col p-5">
            <h3 class="font-bold">{{ p.title }}</h3>
            <p class="mt-2 flex-1 text-sm text-slate-400">{{ p.desc }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="t in p.tags" :key="t" class="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-300">{{ t }}</span>
            </div>
            <a :href="p.url" target="_blank" rel="noopener"
              class="mt-5 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-ink transition group-hover:brightness-110">Ver projeto →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
