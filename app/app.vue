<template>
  <UApp :toaster="{ expand: false }">
    <NuxtLoadingIndicator />
    <div class="bg-[#f2f2ed] dark:bg-transparent min-h-screen">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<style>
body {
  font-size: 14px;
  /* font-weight: 300; */
  /* background-color: #f2f2ed; */
}
</style>
