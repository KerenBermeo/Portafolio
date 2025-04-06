<script setup lang="ts">
import VistaHeader from './components/VistaHeader.vue';
import VistaFooter from './components/VistaFooter.vue';
import { ref } from 'vue';

const activeSection = ref('home');

const setActiveSection = (section: string) => {
  activeSection.value = section;
};
</script>

<template>
  <div class="min-h-screen flex flex-col transition-colors duration-300 dark:bg-gray-900">
    <!-- Header fijo -->
    <VistaHeader :active-section="activeSection" @set-active-section="setActiveSection" />

    <!-- Contenido dinámico controlado por vue-router -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer fijo -->
    <VistaFooter />
  </div>
</template>

