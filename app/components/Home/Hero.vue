<script setup lang="ts"></script>

<template>
  <div
    class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-white dark:bg-[#0F172B] transition-colors duration-300"
  >
    <!-- IMAGE SECTION -->
    <div
      class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
    >
      <svg
        class="absolute left-0 hidden h-full transform -translate-x-1/2 lg:block text-white dark:text-[#0F172B] transition-colors duration-300"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>

      <!-- IMAGE (unchanged) -->
      <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="/images/solar.jpg"
        alt=""
      />
    </div>

    <!-- TEXT SECTION -->
    <div
      class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
    >
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <!-- BADGE -->
        <p
          class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 text-accent dark:bg-teal-500/20 dark:text-teal-200 transition-colors"
        >
          The DMC Group
        </p>

        <!-- HEADING -->
        <h2
          class="mb-5 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:leading-none md:leading-13 transition-colors"
        >
          From Humble Beginnings to an
          <span class="text-primary dark:text-primary-300 transition-colors">
            Industry Leading Corporate
          </span>
        </h2>

        <!-- DESCRIPTION -->
        <p
          class="pr-5 mb-5 text-base text-gray-700 md:text-base dark:text-gray-300 transition-colors"
        >
          Kenyan based business group with interests in paper manufacturing,
          banking and finance, real estate and commodity trading sectors.
        </p>

        <!-- BUTTONS -->
        <div class="flex items-center gap-5">
          <UButton to="/about-us" variant="solid" size="xl">
            Learn More
          </UButton>
          <UButton to="/contact-us" size="xl" variant="outline">
            Get a Quote
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
