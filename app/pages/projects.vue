<script setup lang="ts">
import { reactive } from 'vue'

const projects = reactive([
  {
    title: 'Solar Panels',
    description: 'Converting our entire premises to renewable energy',
    imageUrl: '/images/solar.jpg',
  },
  {
    title: 'Digitization',
    description:
      'Digitization of all business processes to ensure efficiency in customer satisfaction',
    imageUrl: '/images/digitization.png',
  },
])
</script>
<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center h-[250px]"
      style="background-image: url('/images/projects/projects.jpg')"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-accent/70"></div>

      <!-- Content -->
      <UContainer class="">
        <div
          class="relative z-10 w-full text-center md:text-left text-white space-y-4"
        >
          <h2
            class="text-3xl md:text-[33px] font-medium leading-snug text-center"
          >
            Projects
          </h2>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-10 space-y-5">
      <h2 class="text-2xl md:text-3xl font-medium">Projects</h2>

      <HeaderUnderline />

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-500"
        >
          <img
            :src="project.imageUrl"
            :alt="project.title"
            class="h-48 w-full object-cover"
          />

          <div class="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
