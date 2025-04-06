<script setup lang="ts">
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
import { Sun, Moon, Menu } from 'lucide-vue-next';
import { useRouter, useRoute } from 'vue-router'; // Importar router y ruta actual

defineProps<{
  activeSection: string;
}>();

const emit = defineEmits<{
  (e: 'setActiveSection', section: string): void;
}>();

const mobileMenuOpen = ref(false);
const isDark = useDark();
const toggleDark = () => {
  isDark.value = !isDark.value;
};

const router = useRouter();
const route = useRoute(); // Obtener la ruta actual

const navItems = [
  { name: 'Inicio', section: 'home', route: '/' },
  { name: 'Proyectos', section: 'projects', route: '/' },
  { name: 'Habilidades', section: 'skills', route: '/' },
  { name: 'Educación', section: 'education', route: '/' },
  { name: 'Contacto', section: 'contact', route: '/' },
];

const scrollToSection = async (section: string, routePath: string) => {
  if (route.path !== routePath) {
    // Si no estamos en la página objetivo, redirige
    await router.push(routePath);
  }
  if (section) {
    // Desplaza a la sección una vez cargada
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      emit('setActiveSection', section);
    }
  }
  mobileMenuOpen.value = false;
};

const toggleTheme = () => {
  toggleDark();
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <section id="header" class="sticky top-0 z-50 bg-background/80 dark:bg-gray-900 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold dark:text-white">KerenDev</h1>
      <nav class="hidden md:block">
        <ul class="flex space-x-4">
          <li v-for="item in navItems" :key="item.name">
            <button
              class="px-3 py-2 rounded-md text-sm font-medium dark:text-white"
              :class="{ 'text-primary': activeSection === item.section }"
              @click="scrollToSection(item.section, item.route)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>
      <div class="flex items-center space-x-2">
        <button class="p-2 rounded-md" @click="toggleTheme">
          <Sun v-if="isDark" class="h-5 w-5 text-white" />
          <Moon v-else class="h-5 w-5 text-black dark:text-gray-400" />
        </button>
        <button class="p-2 rounded-md md:hidden" @click="toggleMobileMenu">
          <Menu class="h-5 w-5 text-black dark:text-white" />
        </button>
      </div>
    </div>
    <nav v-if="mobileMenuOpen" class="md:hidden">
      <ul class="flex flex-col items-center py-4">
        <li v-for="item in navItems" :key="item.name" class="w-full dark:text-white">
          <button
            class="w-full px-3 py-2 text-left"
            :class="{ 'text-primary': activeSection === item.section }"
            @click="scrollToSection(item.section, item.route)"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>


  
  