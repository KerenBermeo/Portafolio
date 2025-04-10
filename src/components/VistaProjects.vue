<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'
import goImage from '@/assets/foto/go.png'
import dateTimeImage from '@/assets/foto/DateTime.png'
import shortyUrlImage from '@/assets/foto/shortyurl.png'
import { useToast, POSITION } from 'vue-toastification' 

const toast = useToast();

const showDemoAlert = (projectTitle: string) => {
  toast.info(`Lo sentimos, actualmente no hay una demo disponible para "${projectTitle}"`, {
    timeout: 3000,
    icon: '❕',
    position: POSITION.TOP_RIGHT
  });
};

const handleLiveLinkClick = (liveLink: string | (() => void)) => {
  if (typeof liveLink === 'string') {
    window.open(liveLink, '_blank');
  } else {
    liveLink();
  }
};

const featuredProjects = [
  {
    title: "FLashMentor API",
    description: "La API FlashMentor está diseñada para respaldar una aplicación de estudio mediante el uso de flashcards.",
    image:  goImage,
    technologies: ["Go"],
    githubLink: "https://github.com/KerenBermeo/FlashMentor",
    liveLink: () =>  showDemoAlert("API FlashMentor"),
  },
  {
    title: "DateTime API",
    description: "API versátil que ofrece múltiples funcionalidades relacionadas con la manipulación y conversión de fechas y horas.",
    image: dateTimeImage,
    technologies: ["Python", "FastAPI"],
    githubLink: "https://github.com/KerenBermeo/DateTime",
    liveLink: () =>  showDemoAlert("DateTime API"),
  },
  {
    title: "ShortyURL API",
    description: "ShortyURL es una API de acortamiento de URLs desarrollada con Python y ApiFast que convierte URLs largas en enlaces cortos.",
    image: shortyUrlImage,
    technologies: ["Python", "Flask"],
    githubLink: "https://github.com/KerenBermeo/ShortyURL",
    liveLink: () =>  showDemoAlert("ShortyURL API"),
  }
]
</script>

<template>
    <section id="projects" class="py-20">
      <div class="container mx-auto px-4 ">
        <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="index" class="bg-card rounded-lg shadow-md overflow-hidden border-2 dark:text-gray-300">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-contain" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-muted-foreground mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between">
                <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="flex items-center text-primary hover:underline">
                  <Github class="mr-2 h-4 w-4" /> Código
                </a>
                <button @click="handleLiveLinkClick(project.liveLink)" target="_blank" rel="noopener noreferrer" class="flex items-center text-primary hover:underline">
                  <ExternalLink class="mr-2 h-4 w-4" /> Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 text-center">
          <router-link 
            to="/all-projects" 
            class="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium dark:text-white border-2">
            Ver todos los proyectos
          </router-link>
        </div>
      </div>
    </section>
  </template>