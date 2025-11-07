<script setup lang="ts">
import { definePageMeta, useRoute, useRouter, useToast } from '#imports'
import { ref, reactive } from 'vue'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useAuthStore } from '@/stores/auth.js'

definePageMeta({
  layout: 'auth',
})

const route = useRoute()
const router = useRouter()
const toast = useToast()
const authStore = useAuthStore()

// Extract token & email from the URL
const token = (route.query.token as string) || ''
const email = (route.query.email as string) || ''

// Reactive form data
const form = reactive({
  firstName: '',
  surname: '',
  email,
  password: '',
  confirmPassword: '',
})

// Validation schema
const schema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    surname: z.string().min(2, 'Surname is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type Schema = z.output<typeof schema>

const isLoading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isLoading.value = true
  try {
    const response = await authStore.signup({
      ...event.data,
      token,
    })

    if (response.success) {
      toast.add({
        title: 'Account Created!',
        description: response.message || 'You can now verify your account.',
        color: 'success',
      })
      router.push(`/auth/verify-account?email=${email}`)
    } else {
      toast.add({
        title: 'Error',
        description: response.message || 'Failed to sign up',
        color: 'error',
      })
    }
  } catch (err: any) {
    toast.add({
      title: 'Error',
      description: err.message || 'Something went wrong',
      color: 'error',
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="relative min-h-screen flex">
    <!-- LEFT SIDE -->
    <div
      class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-accent-100 dark:bg-transparent"
    >
      <div
        class="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-accent text-white bg-no-repeat bg-cover relative"
        style="
          background-image: url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?auto=format&fit=crop&w=1950&q=80);
        "
      >
        <div
          class="absolute bg-gradient-to-b from-accent to-secondary-900 opacity-75 inset-0 z-0"
        ></div>
        <div class="absolute triangle min-h-screen right-0 w-16"></div>

        <div class="w-full max-w-md z-10">
          <div class="text-5xl font-bold leading-tight mb-6">
            Create Your Account
          </div>
          <div class="text-gray-200 text-md font-light">
            Join the DMC Administration Dashboard and start managing your
            workflow effortlessly.
          </div>
        </div>

        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <!-- RIGHT SIDE -->
      <div
        class="flex w-full sm:w-auto md:h-full md:items-center md:justify-center w-2/5 xl:w-2/5 bg-white dark:bg-transparent"
      >
        <div class="w-full max-w-lg px-6 py-10 md:p-12">
          <!-- <UCard class="p-8 shadow-lg rounded-2xl"> -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900">Welcome!</h2>
            <p class="mt-2 text-sm text-gray-500">
              Complete the form below to finish signing up.
            </p>
          </div>

          <UForm
            :schema="schema"
            :state="form"
            @submit="onSubmit"
            class="space-y-5"
          >
            <!-- <div class="space-y-10"> -->
            <UFormField label="First name" name="firstName" class="text-xs">
              <UInput v-model="form.firstName" class="w-full" />
            </UFormField>

            <UFormField label="Last name" name="surname" class="text-xs">
              <UInput v-model="form.surname" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email" class="text-xs">
              <UInput v-model="form.email" class="w-full" readonly />
            </UFormField>

            <UFormField label="Password" name="password" class="text-xs">
              <UInput
                v-model="form.password"
                type="password"
                class="w-full"
                placeholder="Create a password"
              />
            </UFormField>

            <UFormField
              label="Confirm Password"
              name="confirmPassword"
              class="text-xs"
            >
              <UInput
                v-model="form.confirmPassword"
                type="password"
                class="w-full"
                placeholder="Re-enter password"
              />
            </UFormField>
            <!-- </div> -->

            <div class="pt-2">
              <UButton
                block
                type="submit"
                size="lg"
                color="primary"
                :loading="isLoading"
                label="Sign Up"
                class="rounded-xl"
              />
            </div>
          </UForm>
          <!-- </UCard> -->

          <p class="mt-6 text-center text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/auth/signin" class="text-primary hover:underline">
              Sign in
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}
.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}
.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}
.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}
.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}
.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}
.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}
.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}
.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}
.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.triangle {
  border-top: 60rem solid #fff;
  border-left: 25rem solid transparent;
}
</style>
