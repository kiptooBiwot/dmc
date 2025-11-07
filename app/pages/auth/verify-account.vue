<script setup lang="ts">
import { ref } from 'vue'
import { definePageMeta, useRoute, useRouter, useToast } from '#imports'
import { useAuthStore } from '@/stores/auth'

definePageMeta({
  layout: 'auth',
})

const route = useRoute()
const router = useRouter()
const toast = useToast()
const authStore = useAuthStore()

// Get email from query params
const email = (route.query.email as string) || ''

// Pin input state
const code = ref(['', '', '', '', '', ''])
const isLoading = ref(false)
const isResending = ref(false)

// Function to combine the 6 digits into one string
const getCode = () => code.value.join('')

// Submit verification code
const onSubmit = async () => {
  const verificationCode = getCode()
  if (verificationCode.length < 6) {
    toast.add({
      title: 'Incomplete Code',
      description: 'Please enter all 6 digits.',
      color: 'warning',
    })
    return
  }

  isLoading.value = true
  try {
    const res = await authStore.verifyEmail({
      email,
      code: verificationCode,
    })

    if (res.success) {
      toast.add({
        title: 'Verified!',
        description: 'Your email has been successfully verified.',
        color: 'success',
      })
      router.push('/auth/signin')
    } else {
      toast.add({
        title: 'Verification Failed',
        description: res.message || 'Invalid verification code.',
        color: 'error',
      })
    }
  } catch (err: any) {
    toast.add({
      title: 'Error',
      description: err.message || 'Something went wrong.',
      color: 'error',
    })
  } finally {
    isLoading.value = false
  }
}

// Resend verification code
const resendCode = async () => {
  if (!email) return
  isResending.value = true
  try {
    const res = await authStore.resendVerificationCode(email)
    if (res.success) {
      toast.add({
        title: 'Code Sent!',
        description: 'A new verification code has been sent to your email.',
        color: 'success',
      })
    } else {
      toast.add({
        title: 'Error',
        description: res.message || 'Failed to resend code.',
        color: 'error',
      })
    }
  } catch (err: any) {
    toast.add({
      title: 'Error',
      description: err.message,
      color: 'error',
    })
  } finally {
    isResending.value = false
  }
}
</script>

<template>
  <div class="relative min-h-screen flex">
    <div
      class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-accent-100 dark:bg-transparent"
    >
      <!-- Left Section -->
      <div
        class="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-accent text-white bg-no-repeat bg-cover relative"
        style="
          background-image: url(https://images.unsplash.com/photo-1581091870622-6c8f46c72183?auto=format&fit=crop&w=1950&q=80);
        "
      >
        <div
          class="absolute bg-linear-to-b from-accent to-secondary-900 opacity-75 inset-0 z-0"
        ></div>
        <div class="absolute triangle min-h-screen right-0 w-16"></div>
        <a
          href="#"
          target="_blank"
          class="flex absolute top-5 text-center text-gray-100 focus:outline-none"
        >
          <p class="text-xl ml-3"><strong>DMC</strong></p>
        </a>

        <div class="w-full max-w-md z-10">
          <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Verify Your Email
          </div>
          <div class="sm:text-sm xl:text-md text-gray-200 font-normal">
            Enter the 6-digit code sent to your email to verify your account.
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

      <!-- Right Section -->
      <div
        class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white dark:bg-transparent"
      >
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-gray-900">
              Email Verification
            </h2>
            <p class="mt-2 text-sm text-gray-500">
              Enter the 6-digit code sent to <strong>{{ email }}</strong>
            </p>
          </div>

          <div class="flex justify-center">
            <UPinInput
              v-model="code"
              :length="6"
              size="lg"
              autofocus
              mask
              class="mt-4"
            />
          </div>

          <div class="flex flex-col items-center gap-4 mt-6">
            <UButton
              color="primary"
              :loading="isLoading"
              label="Verify Email"
              @click="onSubmit"
              class="w-full"
            />

            <UButton
              color="gray"
              variant="ghost"
              :loading="isResending"
              @click="resendCode"
            >
              Resend Code
            </UButton>
          </div>
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
