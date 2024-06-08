<script setup lang="ts">
import { ref } from 'vue';

const email = ref('bermeokeren@gmail.com');

const copyEmail = () => {
  navigator.clipboard.writeText(email.value);
};

</script>

<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <!-- Presentación -->
      <div class="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div class="text-center mb-5 lg:mr-20">
          <img src="@/assets/foto/fotoDev.png" alt="Foto de perfil" class="w-56 h-56 rounded-full mx-auto mb-4">
          <h1 class="text-4xl font-bold mb-4">¡Hola, Yo soy Keren!</h1>
          <p class="text-lg text-gray-200 mb-8">Deasarrolladora Back-End</p>
            <!-- Información de contacto -->
            <div class="flex flex-col items-center space-y-4">
              <div class="flex items-center space-x-4 justify-center mb-4">
                <pre class="bg-gray-100 rounded-lg shadow-inner p-4 w-media h-5 text-lg font-mono text-gray-800 flex items-center">
                    <span>bermeokeren@gmail.com </span>
                    <button @click="copyEmail" class="w-5">
                        <img src="@/assets/foto/copy.png" alt="copy" class="w-5 h-5">
                    </button>
                </pre>
              </div>
                <div class="flex space-x-4">
                    <a href="https://www.linkedin.com/in/keren-bermeo-162655185/" class="bg-white p-2 rounded-full">
                        <img src="@/assets/foto/linkedin.png" alt="linkedin" class="w-8 h-8">
                    </a>
                    <a href="https://github.com/KerenBermeo?tab=repositories" class="bg-white p-2 rounded-full">
                        <img src="@/assets/foto/github.png" alt="github" class="w-8 h-8">
                    </a>
                </div>
              </div>
        </div>
        <div class="text-center lg:max-w-lg p-2 lg:ml-10 mb-5">
          <h1 class="text-2xl font-bold mb-4">Acerca de Mi</h1>
          <p class="text-lg text-gray-200 mb-8">Descubrí mi pasión por la programación y desde entonces, no he dejado de aprender y crecer en este campo. Aspiro a convertirme en desarrolladora Backend y ampliar mis conocimientos en inteligencia artificial y ciencia de datos. He trabajado en diversos proyectos personales que reflejan mi dedicación y habilidades. ¡Te invito a echar un vistazo a mis proyectos!</p>
          <a href="#proyectos" class="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Ver Proyectos</a>
        </div>
       
      </div>
  
      <!-- Sección de Proyectos -->
      <div id="proyectos" class="bg-gray-100 py-12"> 
        <h2 class="text-2xl font-bold mb-8">Mis Proyectos</h2>
        <div class=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Agregar proyectos -->

          <!-- Email Query -->
          <div class="bg-white p-6 rounded-lg shadow-md relative group">
            <h3 class="text-xl font-bold mb-4">Email Query</h3>
              <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md relative">
                <a href="https://github.com/KerenBermeo/CorreoQuery" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="@/assets/foto/github.png" alt="github" class="w-20 h-20">
                </a>
                <img src="@/assets/foto/correoQuery.png" alt="correoQuery" class="w-50 h-50">   
              </div>
              <p class="text-gray-600 mt-3">Description</p>
              <p class="text-gray-500">Email Query es un proyecto cuyo objetivo es realizar búsquedas indexadas. He desarrollado una interfaz que permite buscar información dentro de una base de datos de correos electrónicos utilizando el motor de búsqueda ZincSearch.</p>
              <div class="flex items-center mt-4">
                <div class="flex space-x-2">
                  <button class="focus:outline-none group">
                    <img src="@/assets/foto/go.png" alt="Go" title="Go" class="w-8 h-6 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  </button>
                  <button class="focus:outline-none group">
                    <img src="@/assets/foto/zincsearch.png" alt="zinc" title="zinc" class="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  </button>
                  <button class="focus:outline-none group">
                    <img src="@/assets/foto/vue.png" alt="Vue3" title="Vue3" class="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  </button>
                  <button class="focus:outline-none group">
                    <img src="@/assets/foto/tailwind.png" alt="Tailwind" title="Tailwind" class="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity duration-300">
                  </button>
                </div>
              </div>
          </div>


          <!-- API DateTime -->
          <div class="bg-white p-6 rounded-lg shadow-md relative group">
            <div class="flex justify-between">
              <h3 class="text-xl font-bold mb-4">API DateTime</h3>
              <a href="https://datetime-api-kbdev-9a1750c146c9.herokuapp.com/">
                <img src="@/assets/foto/ir_a_pagina.png" alt="Ir a pagina" title="Ir a pagina" class="w-5 h-5">
              </a>
            </div>
            <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md relative">
              <a href="https://github.com/KerenBermeo/DateTime" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src="@/assets/foto/github.png" alt="github" class="w-20 h-20">
              </a>
              <img src="@/assets/foto/DateTime.png" alt="DateTime" class="w-50 h-45">
            </div>
            <p class="text-gray-600 mt-3">Description</p>
            <p class="text-gray-500">Es una API que proporciona múltiples
            funcionalidades relacionadas con la manipulación y conversión de fechas
            y horas. Permite convertir fechas a diferentes formatos, calcular diferencias
            entre fechas, obtener información detallada de zonas horarias, y mucho más.</p>
            <div class="flex items-center mt-4">
              <div class="flex space-x-2">
                <button class="focus:outline-none group">
                  <img src="@/assets/foto/Pythonlogo.png" alt="Python" title="Python" class="w-6 h-6 opacity-75 hover:opacity-100 transition-opacity duration-300">
                </button>
                <button class="focus:outline-none group">
                  <img src="@/assets/foto/fastapi.png" alt="fastapi" title="FastAPI" class=" w-5 h-5 opacity-75 hover:opacity-100 transition-opacity duration-300">
                </button>
              </div>
            </div>
          </div>


          <!-- API ShortyURL -->
          <div class="bg-white p-6 rounded-lg shadow-md relative group">
            <div class="flex justify-between">
              <h3 class="text-xl font-bold mb-4">API ShortyURL</h3>
              <a href="https://kb-shorty-3ec1c0df036e.herokuapp.com/">
                <img src="@/assets/foto/ir_a_pagina.png" alt="Ir a pagina" title="Ir a pagina" class="w-5 h-5">
              </a>
            </div>
            <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md relative">
              <a href="https://github.com/KerenBermeo/ShortyURL" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src="@/assets/foto/github.png" alt="github" class="w-20 h-20">
              </a>
              <img src="@/assets/foto/shortyurl.png" alt="ShortyURL" class="w-50 h-45">
            </div>
            <p class="text-gray-600 mt-3">Description</p>
            <p class="text-gray-500">ShortyURL es una API de acortamiento de URLs desarrollada con Python y ApiFast. Convierte URLs largas en enlaces cortos y manejables. Ofrece redirección rápida, estadísticas opcionales y seguridad integrada. Ideal para desarrolladores que buscan integrar acortamiento de URLs en sus aplicaciones.</p>
            <div class="flex items-center mt-4">
              <div class="flex space-x-2">
                <button class="focus:outline-none group">
                  <img src="@/assets/foto/Pythonlogo.png" alt="Python" title="Python" class="w-6 h-6 opacity-75 hover:opacity-100 transition-opacity duration-300">
                </button>
                <button class="focus:outline-none group">
                  <img src="@/assets/foto/fastapi.png" alt="fastapi" title="FastAPI" class=" w-5 h-5 opacity-75 hover:opacity-100 transition-opacity duration-300">
                </button>
              </div>
            </div>
          </div>


        </div> 
      </div>
  
      <!-- Sección de Tecnologías, Habilidades, Educación y Objetivo -->
      <div class="py-12 p-4 mt-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">
        <div class="container mx-auto">
          <!-- Tecnologías Destacadas -->
          <div>
            <h2 class="text-2xl font-bold mb-4 text-white">Tecnologías Destacadas</h2>
            <ul class="list-disc pl-8 text-white">
              <li>Backend: Go (Golang), Python, JavaScript</li>
              <li>Frontend: Vue.js 3 with Tailwind CSS, React, Basic HTML y CSS</li>
              <li>Database: PostgreSQL</li>
            </ul>
          </div>
  
  
         <!-- Habilidades Adicionales -->
         <div class="p-4 mt-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">
          <h2 class="text-2xl font-bold mb-4 text-white">Habilidades Adicionales</h2>
          <ul class="space-y-4 text-left text-white">
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span>Experiencia en implementación de aplicaciones en AWS EC2.</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span>Uso de contenedores Docker para optimizar la escalabilidad y portabilidad de los entornos de desarrollo.</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span>Comprensión de conceptos básicos de seguridad en el desarrollo web.</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span>Capacidad para trabajar de forma independiente, gestionando eficazmente el tiempo y los recursos.</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span>Flexibilidad para adaptarse a nuevos entornos, tecnologías y situaciones.</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              <span>Capacidad para colaborar eficazmente con otros miembros del equipo para lograr objetivos comunes.</span>
            </li>
          </ul>
        </div>



          <!-- Educación -->
          <div class=" p-4 mt-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">
            <h2 class="text-2xl font-bold mb-4 text-white">Educación</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Codeable -->
              <div class="bg-white p-6 rounded-lg">
                <h3 class="text-xl font-bold">Codeable</h3>
                <p class="text-gray-600">Bootcamp Codeable</p>
                <p class="text-gray-500">Oct 2023 - Feb 2024</p>
                <p class="text-gray-500">
                  <a href="https://certificado-codeable.com" target="_blank" class="text-blue-500 underline">Certificado</a>
                </p>
              </div>

              <!-- freecodecamp -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold">freecodecamp</h3>
                <p class="text-gray-600">Back End Development and APIs</p>
                <p class="text-gray-500">May 2024</p>
                <p class="text-gray-500">
                  <a href="https://certificado-freecodecamp.com" target="_blank" class="text-blue-500 underline">Certificado</a>
                </p>
              </div>

              <!-- Cosdigo Facilito -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold">Cosdigo Facilito</h3>
                <p class="text-gray-600">Curso Profesional de Docker</p>
                <p class="text-gray-500">May 2024</p>
                <p class="text-gray-500">
                  <a href="https://certificado-codigo-facilito.com" target="_blank" class="text-blue-500 underline">Certificado</a>
                </p>
              </div>

              <!-- Udemy - Academia Python -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold">Udemy</h3>
                <p class="text-gray-600">Academia Python - De Cero a Experto en Python con Ejercicios</p>
                <p class="text-gray-500">Oct 2023 - Abr 2024</p>
                <p class="text-gray-500">
                  <a href="https://certificado-udemy-python.com" target="_blank" class="text-blue-500 underline">Certificado</a>
                </p>
              </div>

              <!-- Udemy - HTML+CSS+JavaScript -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold">Udemy</h3>
                <p class="text-gray-600">HTML+CSS+JavaScript - Desarrollo Web</p>
                <p class="text-gray-500">Jul 2023 - Ago 2023</p>
                <p class="text-gray-500">
                  <a href="https://certificado-udemy-html-css-javascript.com" target="_blank" class="text-blue-500 underline">Certificado</a>
                </p>
              </div>
            </div>
          </div>
  
          <!-- Objetivo -->
          <div class="mt-8">
            <h2 class="text-2xl font-bold mb-4 text-white">Objectivo</h2>
            <p class="text-white">Busco oportunidades para contribuir y crecer en un entorno colaborativo. Mi enfoque es utilizar mis habilidades para impulsar el desarrollo de soluciones web innovadoras y de alto impacto.</p>
          </div>

        </div>
      </div>
  </div>
</template>
  

  