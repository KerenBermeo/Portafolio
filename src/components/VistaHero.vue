<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'

const props = defineProps<{
  setActiveSection: (section: string) => void
}>()

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
    props.setActiveSection('projects')
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
    props.setActiveSection('contact')
  }
}
</script>

<template>
    <section id="home" class="py-20 md:py-32 flex flex-col items-center justify-center min-h-screen text-center">
      <div class="mb-8 animate-fade-in">
        <img
          src="/src/assets/foto/fotoDev.png?height=200&width=200"
          alt="Tu Nombre"
          class="rounded-full border-4 border-primary w-48 h-48"
        />
      </div>
      <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-black dark:text-gray-300">
        Hola, soy <span class="text-primary text-black dark:text-gray-300">Keren Bermeo</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in animation-delay-200 text-black dark:text-gray-400">
        Desarrolladora Back-End en búsqueda de nuevos retos, comprometida con el aprendizaje continuo y apasionada por resolver problemas complejos mediante tecnología innovadora.
      </p>
      <div class="flex flex-col md:flex-row gap-4 animate-fade-in animation-delay-400">
        <button
          class="px-6 py-3  rounded-md bg-primary text-primary-foreground font-medium bg-black text-gray-300  dark:bg-white dark:text-black"
          @click="scrollToProjects"
        >
          Ver mis proyectos
        </button>
        <button
          class="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium border-2 border-primary text-black dark:text-white"
          @click="scrollToContact"
        >
          Contáctame
        </button>
      </div>
      <ArrowDown class="animate-bounce mt-16 text-muted-foreground text-black dark:text-white" :size="32" />
    </section>
  </template>