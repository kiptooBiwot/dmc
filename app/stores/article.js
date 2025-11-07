
export const useArticlesStore = defineStore('articles', {
  state: () => ({
    baseUrl: useBaseUrl(),
    articles: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchArticles() {
      this.loading = true
      this.error = null
      try {
        const res = await $fetch(`${this.baseUrl}/article`, {
          method: 'GET',
        })

        this.articles = res
      } catch (err) {
        this.error = err?.message || 'Failed to fetch files'
      } finally {
        this.loading = false
      }
    },

    async uploadArticle(formData) {
      this.loading = true
      this.error = null

      try {
        const res = await $fetch(`${this.baseUrl}/article`, {
          method: 'POST',
          body: formData,
        })
        this.articles.unshift(res.data)
        return res
      } catch (err) {
        this.error = err?.message || 'File upload failed'
        throw err
      } finally {
        this.loading = false
      }
    },

    async deleteArticle(id) {
      this.loading = true
      try {
        await $fetch(`${this.baseUrl}/article/${id}`, {
          method: 'DELETE',
        })
        this.articles = this.articles.filter((f) => f._id !== id)
      } finally {
        this.loading = false
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useArticlesStore, import.meta.hot))
}