<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    title: 'Icons',
    description:
      'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons',
  },
  {
    title: 'Fonts',
    description:
      'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts',
  },
  {
    title: 'Color Mode',
    description:
      'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode',
  },
])
const links = ref([
  {
    label: 'Explore components',
    to: '/docs/components/app',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <section class="bg-secondary-100 py-16 px-6">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <!-- Left Content -->
      <div class="space-y-6">
        <h2 class="text-3xl md:text-3xl font-medium text-[#1C2E63]">
          Get to know the DMC Group
        </h2>

        <div class="text-justify space-y-6">
          <p class="text-gray-700 leading-relaxed">
            We are a Kenyan-based business Group that has Interests in Paper
            Manufacturing Banking and Finance, Real Estate, and Commodity
            Trading sectors.
          </p>
          <p class="text-gray-700 leading-relaxed">
            The DMC Group, is named in honour of Dinesh Maganlal Chandaria, the
            eldest son of the Founding Member and Chairman, Dr. Maganlal
            Chandaria.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Dr. Maganlal Motichand Chandaria, founded the Group in 1947. Having
            steered the Group to success, Dr. M.M. Chandaria has handed over the
            mantle of leadership to his three grandsons, Amit Chandaria, Hetul
            Chandaria and Bhavnish Chandaria. The handover is of paramount
            importance to DMC Group, as it comes at a time when Kenya and the
            East African region is going through a dynamic transformation in
            infrastructure, technology and real estate development.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Through its investments in the various sectors, the DMC Group is now
            strategically poised to contribute more to the country’s and
            regional economic growth, employment and wealth creation.
          </p>
        </div>

        <!-- Features -->
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-start space-x-3"
          >
            <UIcon
              :name="feature.icon"
              class="w-6 h-6 text-primary flex-shrink-0"
            />
            <div>
              <h3 class="font-semibold text-gray-800">{{ feature.title }}</h3>
              <p class="text-sm text-gray-600">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div> -->

        <!-- Links -->
        <!-- <div class="pt-4">
          <UButton size="xl" class="mt-2" to="/about-us"> Learn More </UButton>
        </div> -->
      </div>

      <!-- Right Image -->
      <div>
        <img
          src="/images/founders_images.jpeg"
          alt="Founders of DMC Group"
          class="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
</template>
