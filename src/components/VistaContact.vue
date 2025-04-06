<script setup lang="ts">
import { Copy } from 'lucide-vue-next'
import { useToast } from 'vue-toastification' // Importamos el hook useToast

// Creamos una instancia de toast
const toast = useToast()


const copyEmail = () => {
  const email = 'bermeokeren@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    // Notificación de éxito al copiar el email
    toast.success('Email copiado al portapapeles.')
  }).catch(err => {
    console.error('Error al copiar el email: ', err)
    // Notificación de error si no se pudo copiar el email
    toast.error('No se pudo copiar el email. Por favor, inténtalo de nuevo.')
  })
}
</script>

<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center text-black dark:text-white">Contáctame</h2>
      <div class="max-w-md mx-auto mb-8 flex items-center justify-center text-black dark:text-white">
        <button @click="copyEmail" class="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md border-2">
          <Copy class="mr-2 h-4 w-4" />
          bermeokeren@gmail.com
        </button>
      </div>
    </div>
  </section>
</template>
