<script setup lang="ts"></script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
    <!-- Left side: Image -->
    <div
      class="bg-cover bg-center"
      style="background-image: url('/images/founders_images.jpeg')"
    >
      <!-- Optional overlay for dimming -->
      <div class="w-full h-full bg-black/30"></div>
    </div>

    <!-- Right side: Content Card -->
    <div
      class="flex items-center justify-center bg-[#1c2E63] text-white p-10 md:p-16"
    >
      <div
        class="flex items-center justify-center rounded-xl bg-transparent text-white p-6"
      >
        <div class="max-w-xl space-y-6">
          <!-- Title -->
          <div class="flex items-center space-x-3">
            <!-- <div class="w-3 h-3 bg-primary rounded-full"></div> -->
            <h2 class="text-2xl md:text-3xl font-medium text-primary">
              Who We Are
            </h2>
          </div>

          <!-- Description -->
          <div class="text-justify space-y-6 text-[#F2F2ED]">
            <p class="leading-relaxed">
              We are a Kenyan-based business Group that has interests in Paper
              Manufacturing, Banking and Finance, Real Estate, and Commodity
              Trading sectors.
            </p>

            <p class="leading-relaxed">
              The DMC Group is named in honour of Dinesh Maganlal Chandaria, the
              eldest son of the Founding Member and Chairman, Dr. Maganlal
              Chandaria.
            </p>

            <p class="leading-relaxed">
              Dr. Maganlal Motichand Chandaria founded the Group in 1947. Having
              steered the Group to success, Dr. M.M. Chandaria has handed over
              the mantle of leadership to his three grandsons — Amit Chandaria,
              Hetul Chandaria, and Bhavnish Chandaria. The handover is of
              paramount importance to DMC Group, as it comes at a time when
              Kenya and the East African region are undergoing a dynamic
              transformation in infrastructure, technology, and real estate
              development.
            </p>

            <p class="leading-relaxed">
              Through its investments across various sectors, the DMC Group is
              now strategically poised to contribute more to the country’s and
              region’s economic growth, employment, and wealth creation.
            </p>
          </div>
          <div>
            <UButton
              class="text-white px-6 py-3 rounded-full font-semibold transition-all"
              to="/about-us"
            >
              Learn More
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
