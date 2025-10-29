<template>
  <section
    class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center"
    style="background-image: url('/images/cta.jpg')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-primary/70"></div>

    <!-- Content -->
    <div
      class="relative z-10 w-full md:w-2/3 text-center md:text-left text-white space-y-4"
    >
      <h2 class="text-3xl md:text-[33px] font-medium leading-snug">
        Ready for business? Reach out and get a quote today.
      </h2>
    </div>

    <!-- Button -->
    <div class="relative z-10 mt-6 md:mt-0">
      <UButton
        class="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        to="/contact-us"
      >
        GET A QUOTE
      </UButton>
    </div>
  </section>
</template>
