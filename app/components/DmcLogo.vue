<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number | string
    height?: number | string
    responsive?: boolean
  }>(),
  {
    responsive: false,
  }
)
</script>

<template>
  <div
    class="flex items-center justify-center"
    :class="
      responsive
        ? 'w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 xl:w-56 xl:h-32'
        : ''
    "
    :style="
      !responsive
        ? {
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
          }
        : {}
    "
  >
    <img
      src="/images/dmc-logo.jpg"
      alt="Logo"
      class="object-contain w-full h-full"
    />
  </div>
</template>
