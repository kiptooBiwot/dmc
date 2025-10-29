<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path.startsWith('/index'),
  },
  {
    label: 'About Us',
    to: '/about-us',
    active: route.path.startsWith('/about-us'),
  },
  {
    label: 'DMC Group Offerings',
    // icon: 'i-lucide-box',
    // to: '/dmc/components',
    active: route.path.startsWith('/dmc'),
    children: [
      {
        label: 'Manufacturing',
        icon: 'i-lucide-file-text',
        // description: 'Use NuxtLink with superpowers.',
        to: '/dmc/manufacturing',
      },
      {
        label: 'Finance & Banking',
        icon: 'i-lucide-file-text',
        // description: 'Display a modal within your application.',
        to: '/dmc/finance-banking',
      },
      {
        label: 'Real Estate',
        icon: 'i-lucide-file-text',
        // description: 'Display a list of links.',
        to: '/dmc/real-estate',
      },
    ],
  },
  {
    label: 'Projects',
    to: '/projects',
    active: route.path.startsWith('/projects'),
    // target: '_blank',
  },
  {
    label: 'Our Team',
    to: '/our-team',
    active: route.path.startsWith('/our-team'),
    // target: '_blank',
  },
  {
    label: 'News',
    to: '/news',
    active: route.path.startsWith('/news'),
    // target: '_blank',
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
    active: route.path.startsWith('/contact-us'),
    // target: '_blank',
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      <!-- Responsive logo -->
      <DmcLogo responsive />

      <!-- Fixed size logo -->
      <!-- <DmcLogo :width="100" :height="70" /> -->
    </template>

    <template #right>
      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <!-- <UButton
        label="Sign Up"
        variant="subtle"
        class="hidden lg:block"
        @click="openModal"
      /> -->
    </template>
  </UHeader>
</template>
