export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: useBaseUrl(),
    users: [] as any,
  }),

  actions: {
    async fetchUsers() {
      try {
        const res = await $fetch(`${this.baseUrl}/auth`)
        this.users = res
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
  },
})
