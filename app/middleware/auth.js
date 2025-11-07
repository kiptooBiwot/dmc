import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  // const { isAuthenticated } = storeToRefs(useAuthStore())
  const authStore = useAuthStore()

  // Get stored token
  const token = useCookie('token')
  const authenticated = useCookie('authenticated')

  // Set authentication status based on token presence
  if (token.value) {
    authenticated.value = true
    authStore.isAuthenticated = true
  } else {
    authenticated.value = false
    authStore.isAuthenticated = false
  }

  // Redirect logged-in users away from the signin page
  if (authStore.isAuthenticated && to.path === '/auth/signin') {
    return navigateTo('/dashboard')
  }

  // Redirect unauthenticated users to the signin page if they're trying to access a protected route
  if (
    !authStore.isAuthenticated &&
    to.name !== 'signin' &&
    to.name !== 'signup'
  ) {
    return navigateTo('/auth/signin')
  }
})
