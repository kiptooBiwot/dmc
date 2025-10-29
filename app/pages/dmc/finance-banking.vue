<script setup lang="ts"></script>
<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center h-[250px]"
      style="background-image: url('/images/dmc/banking.jpg')"
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
            Finance & Banking
          </h2>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-10 space-y-5">
      <h2 class="text-2xl md:text-3xl font-medium">Finance & Banking</h2>

      <HeaderUnderline />
      <div class="grid md:flex gap-3">
        <div class="space-y-5">
          <p class="">
            Kenya’s Best Bank in Tier 4, Guardian Bank Limited was founded by
            Dr. M. M. Chandaria, the Chairman of the DMC Group of companies.
            Guardian was incorporated in Kenya in 1992 as a finance company, and
            was converted into a fully-fledged commercial bank in 1996.
          </p>
          <p>
            The Bank has been growing from strength to strength since its
            inception and through its branch network has a presence in Nairobi,
            Mombasa, Eldoret and Kisumu. “We are in the process of further
            expanding our branch network to serve other major towns” states
            Hetul Chandaria, the Executive Director of Guardian Bank Ltd. The
            board members at Guardian Bank Ltd. are business people and
            professionals from various fields. The bank is managed by a
            dedicated and highly experienced team.
          </p>
        </div>
        <div>
          <img src="/images/guardian-bank-large.jpg" class="object-cover" />
        </div>
      </div>

      <div class="space-y-5 mt-10">
        <div class="flex items-center gap-10">
          <h2 class="text-xl md:text-2xl font-semibold">
            Want to know more about Guardian Bank?
          </h2>
          <UButton
            to="https://guardian-bank.com/"
            variant="outline"
            target="_blank"
          >
            Visit Website
          </UButton>
        </div>

        <h4 class="font-semibold text-primary">Your Preferred Bank</h4>
        <p>
          To compliment the rapid growth of business, the bank has been
          continuously investing in the latest technological developments.
          Guardian Bank has innovative products and services that cater for the
          retail and corporate markets. This has enabled it to cater for the
          growing needs of its customers. The latest product the Bank has
          Introduced in M-Guardian where customers can access various facilities
          using mobile technology, including transactions through Mpesa.
        </p>

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
