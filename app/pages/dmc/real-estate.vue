<script setup lang="ts"></script>
<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center h-[250px]"
      style="background-image: url('/images/dmc/real-estate.jpg')"
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
            Real Estate
          </h2>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-10 space-y-5">
      <h2 class="text-2xl md:text-3xl font-medium">Real Estate</h2>

      <HeaderUnderline />
      <div class="grid md:flex gap-3">
        <div class="space-y-5">
          <p class="">
            TThe Group has a tradition and policy of giving back to the society
            and has formed the DMC Foundation in memory of Dinesh Maganlal
            Chandaria. DMC Foundation will channel its empowerment programmes
            through education, health care, nurturing and training talent in all
            walks of life. The Group believes that it is through attaining
            education, good health and the right training that one can stand on
            his/her own feet and fend for self, extended families and
            communities at large in a self-sustaining manner.
          </p>
          <p>
            Going forward, the Foundation will work with various organizations,
            to assist the less privileged in our Society. The Foundation will
            further, partner with hospitals and specialist medical centres that
            can provide medical assistance for the vulnerable groups in the
            society.
          </p>
        </div>
        <div>
          <img src="/images/dmc-foundation-large.jpg" class="object-cover" />
        </div>
      </div>
      <div class="grid md:flex gap-3">
        <div>
          <img
            src="/images/chandaria-commodities-large.png"
            class="object-cover"
          />
        </div>
        <div class="space-y-5">
          <p class="">
            “A life improved will better many others, and to set the bar for my
            three grandsons; I, together with my elder Son, the late Dinesh
            Chandaria rebuilt and have sponsored MM Chandaria Primary School
            over the years” Dr. Chandaria says. This has enabled numerous
            children from less fortunate backgrounds to attain basic education.
            Many of these children have graduated into professional fields and
            managed to uplift their lives”. The challenge now is handed over to
            my young grandsons, Amit Chandaria, Hetul Chandaria, Bhavnish
            Chandaria. Further, in the memory of my late son, Dinesh Chandaria,
            I have contributed to the building of the Dinesh Chandaria Medical
            Centre in MP Shah Hospital and I am further, contributing to
            building of the MP Shah Childrens Hospital to be named Suryakalaben
            Maganlal Chandaria Childrens Medical Centre.
          </p>
          <p>
            “The main operation of the company is currently a commodity trading
            house which specializes in sugar, biomass fuel for industrial
            boilers, rice and paper” Bhavnish says. With a strong foothold in
            Kenya, the company is growing and expanding its product range to
            accommodate the vast range of natural resources and agriculture
            produce that is on offer. “Our customers are a mix of consumers as
            well as, other trading companies” he offers.
          </p>
        </div>
      </div>

      <div class="space-y-5">
        <p></p>

        <!-- <h2 class="text-xl md:text-2xl font-medium">Our Products</h2> -->

        <!-- <div class="grid grid-cols-5 gap-4">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="p-4 border rounded-lg text-center"
          >
            <p class="text-base font-medium">
              {{ index + 1 }}. {{ product.title }}
            </p>
          </div>
        </div> -->
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
