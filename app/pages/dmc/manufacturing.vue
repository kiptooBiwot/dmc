<script setup lang="ts">
import { reactive } from 'vue'

const products = reactive([
  {
    title: 'Fluting Medium',
  },
  {
    title: 'White Top Test Liner',
  },
  {
    title: 'MF Brown',
  },
  {
    title: 'Flower Kraft',
  },
  {
    title: 'Test Liner FSC Recycled',
  },
  {
    title: 'Core Kraft',
  },
  {
    title: 'Top Kraft Brown',
  },
  {
    title: 'High Performance Fluting Medium',
  },
  {
    title: 'Top Kraft White',
  },
  {
    title: 'Core Material',
  },
])
</script>
<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center h-[250px]"
      style="background-image: url('/images/dmc/manufacturing.jpg')"
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
            Manufacturing
          </h2>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-10 space-y-5">
      <h2 class="text-2xl md:text-3xl font-medium">Manufacturing</h2>

      <HeaderUnderline />
      <div class="grid md:flex gap-3">
        <div class="space-y-5">
          <p class="">
            The Company is located in Thika town and manufactures paper grades
            for the corrugated boxes industry. East African Paper Mill (EAPM)
            has over the years garnered a sizeable market share in East Africa
            and supplies to carton box manufacturers in Kenya, Uganda and
            Tanzania. With the growth of business, the Company is planning on
            expanding its operations.
          </p>
          <p>
            EAPM paper products are 100 per cent waste paper that is collected
            from all over Kenya. Thus, EAPM plays a key role in the elimination
            of waste. EAPM has a clear focus on quality improvement and
            training. The management at EAPM upholds Kaizen principles for
            continuous improvement in productivity.
          </p>
        </div>
        <div>
          <img src="/images/eapm.jpg" class="object-cover" />
        </div>
      </div>

      <div class="space-y-5">
        <h2 class="text-xl md:text-2xl font-medium">Our Products</h2>

        <div class="grid grid-cols-5 gap-4">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="p-4 border rounded-lg text-center"
          >
            <p class="text-base font-medium">
              {{ index + 1 }}. {{ product.title }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
