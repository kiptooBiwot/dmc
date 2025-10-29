<script setup lang="ts"></script>

<template>
  <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div
      class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
    >
      <svg
        class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>
      <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="/images/solar.jpg"
        alt=""
      />
      <!-- <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt=""
      /> -->
    </div>
    <div
      class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
    >
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <p
          class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full bg-teal-accent-400"
        >
          The DMC Group
        </p>
        <h2
          class="mb-5 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 sm:leading-none md:leading-13"
        >
          <!-- lg:leading-normal -->
          <!-- Everything you<br class="hidden md:block" />
          can imagine -->
          From Humble Beginnings to an
          <span class="text-primary">Industry Leading Corporate</span>
        </h2>
        <p class="pr-5 mb-5 text-base text-gray-700 md:text-base">
          Kenyan based business group with interests in paper manufacturing,
          banking and finance, real estate and commodity trading sectors.
        </p>
        <div class="flex items-center gap-5">
          <!-- class="inline-flex items-center justify-center h-12 px-6 mr-6
          font-medium tracking-wide text-white transition duration-200 rounded
          shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700
          focus:shadow-outline focus:outline-none" -->
          <UButton to="/about-us" variant="solid" size="xl">
            Learn More
          </UButton>
          <UButton to="/contact-us" size="xl" variant="outline"
            >Get a Quote
          </UButton>
          <!-- class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700" -->
        </div>
      </div>
    </div>
  </div>
</template>
