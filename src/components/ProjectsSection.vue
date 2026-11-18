<script setup>
import { computed, ref } from 'vue'
import { projects, socials } from '../data'

const ALL = 'Todos'
const active = ref(ALL)

const categories = computed(() => [ALL, ...new Set(projects.map((p) => p.category))])
const visible = computed(() =>
  active.value === ALL ? projects : projects.filter((p) => p.category === active.value),
)
const github = socials.find((s) => s.name === 'GitHub')?.url

const count = (c) => (c === ALL ? projects.length : projects.filter((p) => p.category === c).length)
const initials = (title) =>
  title
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
</script>

<template>
  <section id="projetos" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Projetos</h2>
          <p class="mt-3 max-w-md text-slate-400">
            Sites e aplicações que construí, todos publicados e abertos para você testar.
          </p>
        </div>

        <div v-if="categories.length > 2" class="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
          <button
            v-for="c in categories"
            :key="c"
            type="button"
            :aria-pressed="active === c"
            @click="active = c"
            :class="[
              'rounded-full border px-4 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
              active === c
                ? 'border-brand bg-brand text-ink'
                : 'border-white/15 text-slate-300 hover:border-white/40 hover:text-white',
            ]"
          >
            {{ c }}
            <span :class="active === c ? 'text-ink/60' : 'text-slate-500'">{{ count(c) }}</span>
          </button>
        </div>
      </div>

      <TransitionGroup
        tag="div"
        name="card"
        class="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="p in visible"
          :key="p.title"
          class="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-panel transition duration-300 focus-within:border-brand/70 hover:border-brand/70 motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
        >
          <div class="relative aspect-video overflow-hidden bg-ink">
            <img
              v-if="p.image"
              :src="p.image"
              :alt="`Prévia do projeto ${p.title}`"
              loading="lazy"
              class="h-full w-full object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
            />
            <div
              v-else
              :class="['relative flex h-full w-full items-center justify-center bg-gradient-to-br', p.grad]"
              aria-hidden="true"
            >
              <div
                class="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:28px_28px]"
              ></div>
              <span class="relative text-6xl font-extrabold tracking-tight text-white/90">{{ initials(p.title) }}</span>
            </div>
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel/80 via-transparent to-transparent"
            ></div>
            <span
              class="absolute right-3 top-3 rounded-md bg-ink/80 px-2 py-1 text-xs font-medium text-slate-200 backdrop-blur"
              >{{ p.category }}</span
            >
          </div>

          <div class="flex flex-1 flex-col p-5">
            <h3 class="flex items-start justify-between gap-3 text-lg font-bold leading-snug">
              <a
                :href="p.url"
                target="_blank"
                rel="noopener"
                class="outline-none after:absolute after:inset-0 after:content-[''] group-hover:text-brand group-focus-within:text-brand"
              >
                {{ p.title }}<span class="sr-only"> (abre em nova aba)</span>
              </a>
              <svg
                class="mt-1 h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:text-brand motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 11l6-6M6 5h5v5" />
              </svg>
            </h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{{ p.desc }}</p>

            <div class="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <ul class="flex flex-wrap gap-1.5">
                <li
                  v-for="t in p.tags"
                  :key="t"
                  class="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                >
                  {{ t }}
                </li>
              </ul>
              <a
                v-if="p.repo"
                :href="p.repo"
                target="_blank"
                rel="noopener"
                class="relative z-10 shrink-0 text-xs font-medium text-slate-400 underline-offset-4 transition hover:text-brand hover:underline focus-visible:text-brand focus-visible:underline"
                >Código<span class="sr-only"> de {{ p.title }}</span></a
              >
            </div>
          </div>
        </article>

        <a
          v-if="active === ALL && github"
          key="mais"
          :href="github"
          target="_blank"
          rel="noopener"
          class="group flex min-h-48 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 p-6 text-center transition hover:border-brand/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span class="font-semibold group-hover:text-brand">Mais projetos no GitHub</span>
          <span class="max-w-52 text-sm text-slate-400">Novos trabalhos entram aqui conforme ficam prontos.</span>
        </a>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.card-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-enter-from {
  opacity: 0;
  transform: scale(0.97);
}
@media (prefers-reduced-motion: reduce) {
  .card-enter-active {
    transition: none;
  }
}
</style>
