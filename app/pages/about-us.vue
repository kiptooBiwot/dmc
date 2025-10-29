<script setup lang="ts"></script>

<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-bottom h-[250px]"
      style="background-image: url('/images/about/about-us.jpg')"
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
            About Us
          </h2>
        </div>
      </UContainer>
    </section>

    <section class="">
      <HomeKnowDmcGroup />

      <div class="bg-white dark:bg-transparent py-10 lg:py-20">
        <AboutWorkWithUs />
      </div>
    </section>
  </div>
</template>
