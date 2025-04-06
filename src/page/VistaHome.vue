<script setup lang="ts">
import VistaHero from '../components/VistaHero.vue';
import VistaProjects from '../components/VistaProjects.vue';
import VistaSkills from '../components/VistaSkills.vue';
import VistaContact from '../components/VistaContact.vue';
import VistaEducationCertifications from '../components/VistaEducationCertifications.vue';

const setActiveSection = (section: string) => {
  console.log('Active section:', section);
};
</script>

<template>
  <div>
    <VistaHero :set-active-section="setActiveSection" />
    <VistaProjects />
    <VistaSkills />
    <VistaEducationCertifications />
    <VistaContact />
  </div>
</template>
