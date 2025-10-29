<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <div class="w-full bg-tertiary-500 py-2">
        <UContainer class="text-white grid md:flex text-sm justify-end">
          <!-- <div></div> -->
          <div class="flex flex-wrap justify-end text-xs md:text-sm">
            <span class="mr-1"
              >Mon-Fri : 8.00 AM - 5.00 PM, Sat : 8:00 AM - 1:00 PM
            </span>
            <span>| Closed on Sundays and Public Holidays</span>
          </div>
        </UContainer>
      </div>
      <AppHeader />
    </header>
    <UMain>
      <slot />
    </UMain>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
