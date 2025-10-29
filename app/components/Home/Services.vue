<script setup>
const services = [
  {
    icon: 'i-lucide-factory',
    title: 'Manufacturing',
    description:
      'Located in Thika town, we manufacture paper grades for the corrugated boxes industry.',
    link: '/dmc/manufacturing',
  },
  {
    icon: 'i-guidance-bank',
    title: 'Finance and Banking',
    description:
      "Kenya's Best Bank in Tier 4, the Guardian Bank Limited was founded by Dr. M. M. Chandaria.",
    link: '/dmc/finance-banking',
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Real Estate',
    description:
      'Our commodity trading company & giving back to society through the DMC Foundation.',
    link: '/dmc/real-estate',
  },
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-lg font-medium text-primary mb-2">Our Services</h2>
      <h3 class="text-4xl font-semibold text-blue-900">
        Diversifying our operations<br />
        through the years
      </h3>
    </div>

    <div class="max-w-3xl mx-auto mb-8">
      <p class="text-center">
        Through its investments in the various sectors, the DMC Group is now
        strategically poised to contribute more to the country’s and regional
        economic growth, employment and wealth creation.
      </p>
      <!-- <UButton to="/our-company">
        Com
      </UButton> -->
    </div>

    <div class="grid gap-8 md:grid-cols-3 px-6 max-w-6xl mx-auto">
      <div
        v-for="(service, i) in services"
        :key="i"
        class="relative group overflow-hidden bg-white shadow-2xl transition-all duration-500"
      >
        <!-- Background accent animation -->
        <div
          class="absolute inset-0 bg-secondary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
        ></div>

        <!-- Card content -->
        <div
          class="relative z-10 p-8 text-left space-y-4 transition-colors duration-500 group-hover:text-white"
        >
          <div
            class="text-accent font-bold text-sm tracking-wide group-hover:text-white"
          >
            <UIcon :name="service.icon" class="text-primary w-12 h-12" />
          </div>
          <h4 class="text-xl font-bold text-accent group-hover:text-white">
            {{ service.title }}
          </h4>
          <p class="text-gray-700 leading-relaxed group-hover:text-gray-100">
            {{ service.description }}
          </p>

          <UButton
            class="mt-4 bg-primary text-white px-4 py-2 rounded-md font-medium transition"
            :to="service.link"
          >
            Read More
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .text-primary {
  @apply text-orange-500;
}
.bg-primary {
  @apply bg-orange-500;
} */
</style>
