<script setup lang="ts">
import { GraduationCap, Award, ExternalLink } from 'lucide-vue-next'

const education = [
  {
    degree: "Técnico en Programación de Software",
    institution: "SENA",
    year: "Actualmente"
  }
]

const certifications = [
  {
    name: "BootCamp: Backend con Golang y frontend con Vue",
    issuer: "Codeable",
    year: "Oct 2023 - Feb 2024",
    url: "https://www.linkedin.com/in/keren-bermeo-162655185/details/certifications/1719952691906/single-media-viewer/?profileId=ACoAACuzT5oBs4mLaVPiK7xGjwsMSy27FaaAaoE"
  },
  {
    name: "Academia Python - De Cero a Experto en Python con Ejercicios",
    issuer: "Udemy",
    year: "Oct 2023 - Abr 2024",
    url: "https://www.udemy.com/certificate/UC-f3111260-4242-4c7a-a99e-b175c61bb415/"
  },
  {
    name: "Desarrollo de Aplicaciones Web en Tiempo Real con JavaScript y Node.js",
    issuer: "SENA",
    year: "Oct 2024 - Dec 2024",
    url: "https://www.linkedin.com/in/keren-bermeo-162655185/overlay/1736032051719/single-media-viewer/?profileId=ACoAACuzT5oBs4mLaVPiK7xGjwsMSy27FaaAaoE"
  }
]
</script>

<template>
    <section id="education" class="py-20 bg-background">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center dark:text-white">Certificaciones y Educación</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          
          <div class="certifications">
            <h3 class="text-2xl font-semibold mb-6 text-primary dark:text-gray-200">Certificaciones</h3>
            <ul class="space-y-8">
              <li v-for="(cert, index) in certifications" :key="index" class="bg-card rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:text-gray-300">
                <div class="flex items-center mb-2">
                  <Award class="w-6 h-6 mr-2 text-primary" />
                  <h4 class="text-lg font-medium">{{ cert.name }}</h4>
                </div>
                <p class="text-muted-foreground">{{ cert.issuer }}</p>
                <p class="text-sm">{{ cert.year }}</p>
                <a v-if="cert.url" :href="cert.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center mt-2 text-primary hover:underline">
                  Ver certificado
                  <ExternalLink class="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
            <div class="mt-12 text-center">
              <router-link to="/all-certifications" class="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium dark:text-white border-2">
                Ver todas las certificaciones
              </router-link>
            </div>
          </div>

          <div class="education">
            <h3 class="text-2xl font-semibold mb-6 text-primary dark:text-gray-200">Educación</h3>
            <ul class="space-y-8">
              <li v-for="(edu, index) in education" :key="index" class="bg-card rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:text-gray-300">
                <div class="flex items-center mb-2">
                  <GraduationCap class="w-6 h-6 mr-2 text-primary" />
                  <h4 class="text-lg font-medium">{{ edu.degree }}</h4>
                </div>
                <p class="text-muted-foreground">{{ edu.institution }}</p>
                <p class="text-sm">{{ edu.year }}</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
</template>


