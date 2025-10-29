<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  {
    label: 'Learn More',
    to: '/about-us',
    icon: 'i-lucide-square-play',
  },
  {
    label: 'Get a Quote',
    to: '/contact-us',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <div class="bg-secondary-200 -mt-16">
    <UPageHero
      orientation="horizontal"
      reverse
      :links="links"
      class="min-h-screen"
    >
      <template #headline>
        <h2 class="font-medium text-primary">The DMC Group</h2>
      </template>

      <template #title>
        <h3 class="text-lg md:text-6xl font-bold leading-16">
          From Humble Beginnings to an Industry Leading Corporate
        </h3>
      </template>

      <template #description>
        <p class="max-w-2xl text-base md:text-base text-muted-foreground">
          Kenyan based business group with interests in paper manufacturing,
          banking and finance, real estate and commodity trading sectors
        </p>
      </template>

      <!-- <template #image> -->
      <img
        src="/images/solar.jpg"
        alt="DMC Hero Image"
        class="w-full h-screen md:h-[65vh] object-cover rounded-lg shadow-2xl ring ring-default"
      />
      <!-- </template> -->
    </UPageHero>
  </div>
</template>

<!-- <template>
  <div class="bg-secondary-200 -mt-16">
    <UPageHero
      title="'From Humble Beginnings to an Industry Leading Corporate'"
      description="Kenyan based business group with interests in paper manufacturing, banking and finance, real estate and commodity training sectors"
      headline="The DMC Group"
      orientation="horizontal"
      reverse
      :links="links"
    >
      <img
        src="/images/solar.jpg"
        alt="App screenshot"
        class="rounded-lg shadow-2xl ring ring-default"
      />
    </UPageHero>
  </div>
</template> -->
