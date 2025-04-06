<script setup lang="ts">
const skills = [
  { name: "Go", level: "Básico", learning: true },
  { name: "Python", level: "Básico", learning: true },
  { name: "Java", level: "Básico", learning: true },
  { name: "PHP", level: "Básico", learning: true },
  { name: "Javascript", level: "Básico", learning: true },
  { name: "SQL", level: "Básico", learning: true },
  { name: "Vue 3", level: "Básico", learning: true },
];
</script>

<template>
  <section
    id="skills"
    class="py-20 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">Mis Habilidades</h2>
      
      <!-- Versión minimalista con badges -->
      <div class="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="relative group"
        >
          <div class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <span class="font-medium">{{ skill.name }}</span>
            <span class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
              {{ skill.level }}
            </span>
            <span 
              v-if="skill.learning"
              class="absolute -top-2 -right-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 rounded-full animate-pulse"
            >
              ↑
            </span>
          </div>
        </div>
      </div>

      <!-- Nota opcional sobre tu enfoque -->
      <p class="text-center mt-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Actualmente en formación activa en todas estas tecnologías a través del SENA y proyectos personales.
        ¡Siempre aprendiendo!
      </p>
    </div>
  </section>
</template>

<style scoped>
.shadow-lg:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.dark .shadow-lg:hover {
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}
</style>


