<script setup lang="ts">
import { definePageMeta, useToast } from '#imports'
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

definePageMeta({
  layout: 'auth',
})

const toast = useToast()
const authStore = useAuthStore()
const router = useRouter()

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
  {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox',
  },
]

const schema = z.object({
  email: z.email('Invalid email'),
  password: z
    .string('Password is required')
    .min(8, 'Must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

const isLoading = ref(false)
async function onSubmit(payload: FormSubmitEvent<Schema>) {
  isLoading.value = true
  try {
    const result = await authStore.login({
      email: payload.data.email,
      password: payload.data.password,
    })

    if (result.success) {
      toast.add({
        title: 'Success',
        description: result.data.message || result.message,
        color: 'success',
      })

      await new Promise((resolve) => setTimeout(resolve, 200))
      router.push('/dashboard/')
    } else {
      toast.add({ title: 'Error', description: result.message, color: 'error' })
    }
  } catch (error: any) {
    toast.add({ title: 'Error', description: error.message, color: 'error' })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="relative min-h-screen flex">
    <div
      class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-accent-100 dark:bg-transparent"
    >
      <div
        class="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-accent text-white bg-no-repeat bg-cover relative"
        style="
          background-image: url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80);
        "
      >
        <div
          class="absolute bg-linear-to-b from-accent to-secondary-900 opacity-75 inset-0 z-0"
        ></div>
        <div class="absolute triangle min-h-screen right-0 w-16" style=""></div>
        <a
          href="https://codepen.io/uidesignhub"
          target="_blank"
          title="codepen aji"
          class="flex absolute top-5 text-center text-gray-100 focus:outline-none"
        >
          <!-- src="/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" -->
          <!-- <img
            alt="aji"
            class="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
          /> -->
          <p class="text-xl ml-3"><strong>DMC</strong></p>
        </a>
        <!-- <img
          src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
          class="h-96 absolute right-5 mr-5"
        /> -->
        <div class="w-full max-w-md z-10">
          <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
            DMC Administration Login
          </div>
          <div class="sm:text-sm xl:text-md text-gray-200 font-normal">
            Admin section sign in. This is strictly for authorised personnel
            only.
          </div>
        </div>
        <!---remove custom style-->
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
      <div
        class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white dark:bg-transparent"
      >
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
            <p class="mt-2 text-sm text-gray-500">
              Please sign in to your account
            </p>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="h-px w-16 bg-gray-200"></span>
            <span class="text-gray-300 font-normal"> continue with</span>
            <span class="h-px w-16 bg-gray-200"></span>
          </div>

          <!-- <UPageCard class="w-full max-w-md"> -->
          <UAuthForm
            :schema="schema"
            :fields="fields"
            @submit="onSubmit"
            :loading="isLoading"
            label="Sign In"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*remove custom style*/
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
