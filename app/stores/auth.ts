import { useUserStore } from './user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    baseUrl: useBaseUrl(),
    isAuthenticated: false,
  }),
  actions: {
    createAccount(payload: object) {
      try {
        console.log('BASE URL:', this.baseUrl)
        console.log('PAYLOAD:', payload)

        // setTimeout(() => {
        return { message: 'success', baseUrl: this.baseUrl }
        // }, 5000)
      } catch (error) {}
    },

    async login(payload: object) {
      try {
        const res: any = await $fetch(`${this.baseUrl}/auth/login`, {
          method: 'POST',
          body: payload,
        })

        const token = useCookie('token', {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        }) // 7 days
        const user = useCookie('user', { path: '/', maxAge: 60 * 60 * 24 * 7 })

        token.value = res?.token
        user.value = res?.user

        return {
          success: true,
          message: 'Login successful!',
          data: res,
        }
      } catch (error: any) {
        const errMsg =
          error?.data?.message ||
          error?.message ||
          'Login failed. Please try again.'

        return {
          success: false,
          message: errMsg,
          error,
        }
      }
    },

    async signup(payload: object) {
      try {
        const res: any = await $fetch(`${this.baseUrl}/auth/signup`, {
          method: 'POST',
          body: payload,
        })

        return {
          success: true,
          message: 'Registration successful!',
          data: res,
        }
      } catch (error: any) {
        const errMsg =
          error?.data?.message ||
          error?.message ||
          'Registration failed. Please try again.'

        return {
          success: false,
          message: errMsg,
          error,
        }
      }
    },

    async verifyEmail(payload: object) {
      try {
        const res: any = await $fetch(`${this.baseUrl}/auth/verify-email`, {
          method: 'POST',
          body: payload,
        })

        return {
          success: true,
          message: 'Account verified!',
          data: res,
        }
      } catch (error: any) {
        const errMsg =
          error?.data?.message ||
          error?.message ||
          'Verification failed. Please try again.'

        return {
          success: false,
          message: errMsg,
          error,
        }
      }
    },

    signOut: async function () {
      try {
        const tokenCookie = useCookie('token')
        const refreshTokenCookie = useCookie('refreshToken')
        const userCookie = useCookie('user')

        tokenCookie.value = null
        refreshTokenCookie.value = null
        userCookie.value = null

        // this.token = null
        // this.refreshToken = null
        // this.user = null

        return {
          success: true,
          message: 'You have logged out of your session. Goodbye!',
        }
      } catch (error) {
        return error
      }
    },

    async deleteUser(id: string) {
      try {
        await $fetch(`${this.baseUrl}/auth/${id}`, { method: 'DELETE' })

        const userStore = useUserStore()
        await userStore.fetchUsers()
      } catch (error) {
        return error
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
