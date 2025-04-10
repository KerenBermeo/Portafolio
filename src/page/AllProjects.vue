<script setup lang="ts">
import { ref } from 'vue';
import { Github, ExternalLink } from 'lucide-vue-next'
import goImage from '@/assets/foto/go.png'
import dateTimeImage from '@/assets/foto/DateTime.png'
import shortyUrlImage from '@/assets/foto/shortyurl.png'
import moviGoImage from '@/assets/foto/logo_MoviGo.png'
import portalLabImage from '@/assets/foto/portalLab.png'
import pokeapiImage from '@/assets/foto/pokeapi.png'
import { useToast, POSITION } from 'vue-toastification' 

const toast = useToast();

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string | (()=> void);
}


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


const projects = ref<Project[]>([
  {
    id: 1,
    title: "API FlashMentor",
    description: "Esta es la Api es la base de para una aplicacion web de estudio con la cual se puede crear una pagina web con tarjetas de memoria que faciliten el aprendizaje.",
    image: goImage,
    technologies: ["Go", "GORM", "Gin", "MySQL"],
    githubLink: "https://github.com/KerenBermeo/FlashMentor",
    liveLink: () =>  showDemoAlert("API FlashMentor"),
  },
  {
    id: 2,
    title: "DATETIME API",
    description: "Una API versátil que ofrece múltiples funcionalidades relacionadas con la manipulación y conversión de fechas y horas. ",
    image: dateTimeImage,
    technologies: ["Python", "FastAPI"],
    githubLink: "https://github.com/KerenBermeo/DateTime",
    liveLink: () =>  showDemoAlert("DATETIME API"),
  },
  {
    id: 3,
    title: "ShortyURL API",
    description: "ShortyURL es una API de acortamiento de URLs desarrollada con Python y ApiFast que convierte URLs largas en enlaces cortos.",
    image: shortyUrlImage,
    technologies: ["Python", "Flask"],
    githubLink: "https://github.com/KerenBermeo/ShortyURL",
    liveLink: () =>  showDemoAlert("ShortyURL API"),
  },
  {
    id: 4,
    title: "MoviGo",
    description: "Aplicacion de escritorio desarrollada en la formacion tecnica con tematica de servicio de transporte",
    image: moviGoImage,
    technologies: ["Java", "MySQL"],
    githubLink: "https://github.com/KerenBermeo/MoviGo",
    liveLink: () =>  showDemoAlert("MoviGo"),
  },
  {
    id: 5,
    title: "Portal Lab",
    description: "Pagina web de un laboratorio que simula la facturacion de un laboratorio medico.",
    image: portalLabImage,
    technologies: ["PHP", "HTML", "CSS", "Javascript", "MariaDB"],
    githubLink: "https://github.com/KerenBermeo/PortalLab",
    liveLink: () =>  showDemoAlert("Portal Lab"),
  },
  {
    id: 6,
    title: "Prueba pokeapi",
    description: "Experimento de consumo de pokeAPI y utilizacion de EJS",
    image: pokeapiImage ,
    technologies: ["Jacascript", "EJS", "Node.js", "Express", "Axios"],
    githubLink: "https://github.com/KerenBermeo/cosumo_pokeapi",
    liveLink: () =>  showDemoAlert("Prueba pokeapi"),
  }
]);
</script>

<template>
  <div class="min-h-screen bg-background dark:bg-gray-900">
    <main class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8 text-center dark:text-white">Todos mis Proyectos</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="bg-card rounded-lg shadow-md border-2 overflow-hidden dark:text-gray-300">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-48 object-contain bg-gray-100 dark:bg-gray-800" 
          />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
            <p class="text-muted-foreground mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
            <div class="flex justify-between">
                <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="flex items-center text-primary hover:underline">
                  <Github class="mr-2 h-4 w-4" /> Código
                </a>
                <button 
                @click="handleLiveLinkClick(project.liveLink)"
                class="flex items-center text-primary hover:underline cursor-pointer">
                <ExternalLink class="mr-2 h-4 w-4" /> Demo
              </button>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


