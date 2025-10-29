<script setup lang="ts">
const items = [
  { src: '/images/dmc-businesspark.jpg', alt: 'DMC Business Park' },
  { src: '/images/eapm.jpg', alt: 'EAPM' },
  { src: '/images/dmc-foundation.jpg', alt: 'DMC Foundation' },
  { src: '/images/guardian_bank.jpg', alt: 'Guardian Bank' },
  { src: '/images/chandaria_commodities.png', alt: 'Chandaria Commodities' },
]
</script>

<template>
  <section class="max-w-7xl mx-auto">
    <h2 class="text-2xl font-extrabold text-center text-primary-500 mb-8">
      Our Companies
    </h2>

    <div class="overflow-hidden relative">
      <div
        class="flex w-max animate-marquee space-x-16 transition duration-300"
      >
        <!-- Original -->
        <template v-for="(item, index) in items" :key="index">
          <img
            :src="item.src"
            alt="Company Logo"
            class="h-20 w-auto object-cover flex-shrink-0"
          />
        </template>

        <!-- Duplicate for smooth looping -->
        <template v-for="(item, index) in items" :key="'dup-' + index">
          <img
            :src="item.src"
            alt="Company Logo"
            class="h-20 w-auto object-cover flex-shrink-0"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  display: flex;
  width: max-content;
}
</style>
