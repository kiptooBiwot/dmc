<script setup lang="ts">
import { onMounted } from '#imports'
import { useArticlesStore } from '@/stores/article'

const articleStore = useArticlesStore()

onMounted(async () => {
  await articleStore.fetchArticles()
})
</script>
<template>
  <div>
    <section
      class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center h-[250px]"
      style="background-image: url('/images/news/media-news.jpg')"
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
            Media and News
          </h2>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-10 space-y-5">
      <h2 class="text-2xl md:text-3xl font-medium">Media and News</h2>

      <HeaderUnderline />

      <!-- <UPage> -->
      <!-- <UPageHero title="News" /> -->

      <UPageBody>
        <UContainer v-if="articleStore.articles.length > 0">
          <UBlogPosts>
            <UBlogPost
              v-for="(article, index) in articleStore.articles"
              :key="index"
              :to="article.id"
            />
            <!-- v-bind="article" -->
          </UBlogPosts>
        </UContainer>
        <UContainer v-else>
          <div class="">
            <h2 class="text-lg font-medium text-accent">
              No news items added yet
            </h2>
          </div>
        </UContainer>
      </UPageBody>
      <!-- </UPage> -->
    </UContainer>
  </div>
</template>

<style scoped></style>
