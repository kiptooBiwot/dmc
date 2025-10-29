<script setup lang="ts">
import { reactive } from 'vue'

const team = reactive([
  {
    name: 'Amit Chandaria',
    role: 'CEO',
    roleDescription:
      'Heads the leadership of the manufacturing division – East African Paper Mills Ltd (EAPM). He over sees an independent management team.',
    image: '/images/BhavnishChandaria.jpeg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      vimeo: '#',
    },
  },
  {
    name: 'Hetul Chandaria',
    role: 'CEO',
    roleDescription:
      'Oversees the Banking and Finance division, which incorporates the Guardian Bank Limited, with an independent management team.',
    image: '/images/BhavnishChandaria.jpeg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      vimeo: '#',
    },
  },
  {
    name: 'Bhavnish Chandaria',
    role: 'CEO',
    roleDescription:
      'Heads the real estate and commodity trading division including Chandaria Properties limited, Chandaria Commodities Limited and DMC Properties.',
    image: '/images/BhavnishChandaria.jpeg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      vimeo: '#',
    },
  },
])
</script>
<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-bottom h-[250px]"
      style="background-image: url('/images/team/our-team.jpg')"
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
            Our Team
          </h2>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-10 space-y-5">
      <h2 class="text-2xl md:text-3xl font-medium">Meet the Senior Team</h2>

      <HeaderUnderline />

      <section class="py-16">
        <UContainer>
          <!-- <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Our Awesome Team
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> -->

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(person, index) in team"
              :key="index"
              class="group bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl duration-500"
            >
              <!-- Image and diamond pointer -->
              <div class="relative">
                <img
                  :src="person.image"
                  :alt="person.name"
                  class="w-full h-80 object-cover"
                />
                <!-- Diamond pointer that changes color with group hover -->
                <div
                  class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 transition duration-300 group-hover:bg-primary"
                ></div>
              </div>

              <!-- Text section that also changes background and text color -->
              <div
                class="pt-8 pb-6 px-6 text-center transition duration-300 group-hover:bg-primary group-hover:text-white"
              >
                <h3
                  class="text-lg font-semibold text-gray-800 group-hover:text-white"
                >
                  {{ person.name }}
                </h3>

                <p class="text-xs mt-5">
                  {{ person.roleDescription }}
                </p>

                <div
                  class="flex justify-center space-x-5 mt-4 text-gray-600 group-hover:text-white"
                >
                  <a
                    :href="person.socials.facebook"
                    target="_blank"
                    class="transition hover:text-blue-200"
                  >
                    <i class="i-fa6-brands-facebook-f"></i>
                  </a>
                  <a
                    :href="person.socials.twitter"
                    target="_blank"
                    class="transition hover:text-blue-200"
                  >
                    <i class="i-fa6-brands-twitter"></i>
                  </a>
                  <a
                    :href="person.socials.vimeo"
                    target="_blank"
                    class="transition hover:text-blue-200"
                  >
                    <i class="i-fa6-brands-vimeo-v"></i>
                  </a>
                  <a
                    :href="person.socials.linkedin"
                    target="_blank"
                    class="transition hover:text-blue-200"
                  >
                    <i class="i-fa6-brands-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>
    </UContainer>
  </div>
</template>

<style scoped></style>
