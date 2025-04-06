<script setup lang="ts">
import { ref } from 'vue'
import { Award, ExternalLink } from 'lucide-vue-next'

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

const activeSection = ref('home')

const setActiveSection = (section: string) => {
  activeSection.value = section
}

const certifications = ref<Certification[]>([
  {
    id: 1,
    name: "JavaScript y Node.js",
    issuer: "SENA",
    date: "Diciembre 2024",
    url: "https://www.linkedin.com/in/keren-bermeo-162655185/details/certifications/1736032051719/single-media-viewer/?profileId=ACoAACuzT5oBs4mLaVPiK7xGjwsMSy27FaaAaoE"
  },
  {
    id: 2,
    name: "Ciberseguridad de Google",
    issuer: "Google",
    date: "Julio 2024",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/3AYRC79FXDTG"
  },
  {
    id: 3,
    name: "Herramientas de oficio: Linux y SQL",
    issuer: "Coursera",
    date: "Julio 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/J5F2FL82KRHZ"
  },
  {
    id: 4,
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    date: "Mayo 2024",
    url: "https://www.freecodecamp.org/certification/koely/back-end-development-and-apis"
  },
  {
    id: 5,
    name: "Curso Profesional de Docker",
    issuer: "códigofacilito",
    date: "Mayo 2024",
    url: "https://www.linkedin.com/in/keren-bermeo-162655185/details/certifications/1715218666651/single-media-viewer/?profileId=ACoAACuzT5oBs4mLaVPiK7xGjwsMSy27FaaAaoE"
  },
  {
    id: 6,
    name: "Python de cero a experto",
    issuer: "Udemy",
    date: "Abril 2024",
    url: "https://www.udemy.com/certificate/UC-f3111260-4242-4c7a-a99e-b175c61bb415/"
  },
  {
    id: 7,
    name: "BootCamp en Go 'TruCode V2'",
    issuer: "Codeable y Tuora",
    date: "Febrero 2024",
    url: "https://www.linkedin.com/in/keren-bermeo-162655185/details/certifications/1719952691906/single-media-viewer/?profileId=ACoAACuzT5oBs4mLaVPiK7xGjwsMSy27FaaAaoE"
  },
  {
    id: 8,
    name: "HTML, CSS, Javascript",
    issuer: "Udemy",
    date: "Agosto 2023",
    url: "https://www.udemy.com/certificate/UC-e943f059-1ecb-4cdb-8b07-d5d501d4f6f7/"
  }
])
</script>

<template>
    <div class="min-h-screen bg-background">
      <Header :active-section="activeSection" @set-active-section="setActiveSection"/>
      <main class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-12 text-center dark:text-white">Mis Certificaciones</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-white">
          <div v-for="cert in certifications" :key="cert.id" 
               class="bg-card rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg border-2">
            <div class="flex items-center mb-4">
              <Award class="w-8 h-8 mr-3 text-primary" />
              <h2 class="text-xl font-semibold">{{ cert.name }}</h2>
            </div>
            <p class="text-muted-foreground mb-2 dark:text-gray-400">{{ cert.issuer }}</p>
            <p class="text-sm mb-4 dark:text-gray-300">{{ cert.date }}</p>
            <a v-if="cert.url" :href="cert.url" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-primary hover:underline dark:text-white">
              Ver certificado
              <ExternalLink class="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
</template>