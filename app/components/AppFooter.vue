<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  {
    label: 'Quick Links',
    children: [
      {
        label: 'Home',
        to: '/',
      },
      {
        label: 'Our Company',
        to: '/about-us',
      },
      {
        label: 'Projects',
        to: '/projects',
      },
      {
        label: 'Out Team',
        to: '/our-team',
      },
    ],
  },
  {
    label: 'Other Pages',
    children: [
      {
        label: 'About Us',
        to: '/about-us',
      },
      {
        label: 'Contact Us',
        to: '/contact-us',
      },
      // {
      //   label: 'Jobs',
      // },
      // {
      //   label: 'Sponsors',
      // },
    ],
  },
  {
    label: 'DMC Portfolio',
    children: [
      {
        label: 'Manufacturing',
        to: '/dmc/manufacturing',
      },
      {
        label: 'Finance & Banking',
        to: '/dmc/finance-banking',
      },
      {
        label: 'Real Estate',
        to: '/dmc/real-estate',
      },
      // {
      //   label: 'Blog',
      // },
    ],
  },
]
</script>

<template>
  <USeparator icon="" class="h-px" />

  <UFooter
    :ui="{ top: 'border-b border-default' }"
    class="bg-[#071A3C] text-primary"
  >
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <NuxtLink to="/" class="cursor-pointer">
              <DmcLogo responsive :height="200" :width="300" />
            </NuxtLink>
            <!-- <DmcLogo :width="300" :height="200" class="" /> -->
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-white">
        DMC GROUP LIMITED • © {{ new Date().getFullYear() }} | Developed by
        <ULink
          class="inline-block text-primary hover:text-primary-500 hover:ml-1 hover:uppercase hover:underline hover:scale-105 transition-all duration-500 ease-in-out"
          target="_blank"
          href="https://www.aegirconsult.systems"
        >
          Aegir Consult Limited
        </ULink>
      </p>
    </template>

    <template #right>
      <!-- <UButton
        to="https://go.nuxt.com/discord"
        target="_blank"
        icon="i-simple-icons-discord"
        aria-label="Nuxt on Discord"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://go.nuxt.com/x"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="Nuxt on X"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/nuxt-ui-templates/landing"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="Nuxt UI on GitHub"
        color="neutral"
        variant="ghost"
      /> -->
    </template>
  </UFooter>
</template>
