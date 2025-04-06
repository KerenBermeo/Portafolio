<script setup lang="ts">
import { ref } from 'vue'
import { Github, Linkedin } from 'lucide-vue-next'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
    <footer class="bg-background border-t">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center dark:text-white">
          <p>&copy; {{ currentYear }} Keren Bermeo. Todos los derechos reservados.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/KerenBermeo" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary">
              <Github class="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/keren-bermeo-162655185/" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary">
              <Linkedin class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>