<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { ref, reactive } from 'vue'
import { z } from 'zod'

// Define the form state interface
interface State {
  name: string | undefined
  email: string | undefined
  subject: string | undefined
  message: string | undefined
}

// const toast = useToast()

// Define the form state
const state = reactive<State>({
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
})

// Loading state for form submission
const pending = ref(false)

// Define Zod validation schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message should be at least 10 characters'),
})

// Handle form submission
async function onSubmit(event: FormSubmitEvent<State>) {
  // try {
  //   pending.value = true
  //   // Here you would typically send the data to your API
  //   console.log('Form submitted:', event.data)
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   // Show success message
  //   useToast().add({
  //     title: 'Message sent successfully!',
  //     description: 'We will get back to you soon.',
  //     icon: 'i-heroicons-check-circle',
  //     color: 'success',
  //   })
  //   // Reset form
  //   Object.assign(state, {
  //     name: undefined,
  //     email: undefined,
  //     subject: undefined,
  //     message: undefined,
  //   })
  // } catch (error) {
  //   // Show error message
  //   useToast().add({
  //     title: 'Error sending message',
  //     description: 'Please try again later.',
  //     icon: 'i-heroicons-exclamation-triangle',
  //     color: 'error',
  //   })
  // } finally {
  //   pending.value = false
  // }
}

const contacts = ref([
  {
    name: 'Phone Number',
    detail: '(+254) 770 349 788',
    icon: 'i-material-symbols-phone-android-outline',
  },
  {
    name: 'Location',
    detail: 'Factory Street, Thika, Kenya',
    icon: 'i-material-symbols-home-pin-sharp',
  },
  {
    name: 'Email',
    detail: 'info@dmcgroup.co.ke',
    icon: 'i-material-symbols-light-mail-outline',
  },
])
</script>
<template>
  <section
    class="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center h-[250px]"
    style="background-image: url('/images/contact-us/contact-us.jpg')"
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
          Contact
        </h2>
      </div>
    </UContainer>
  </section>

  <UContainer class="grid lg:flex gap-5 py-10 lg:py-20">
    <div class="flex-1 space-y-6">
      <h2 class="text-3xl font-medium">Contact Us</h2>

      <div class="grid">
        <div
          class="flex gap-5 space-y-6 items-start"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <div
            class="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-[#e5e5e5]"
          >
            <UIcon :name="contact.icon" class="text-primary w-8 h-8" />
          </div>
          <div class="">
            <h3 class="font-medium text-primary text-xs">
              {{ contact.name }}
            </h3>
            <p>{{ contact.detail }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-2">
      <div
        class="bg-white dark:bg-accent rounded-xl shadow-lg p-8 w-full lg:w-3/4 mx-auto"
      >
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-6"
          @submit="onSubmit"
        >
          <!-- Name and Email Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <UFormField label="Name" name="name" class="text-xs font-light">
              <UInput v-model="state.name" class="w-full" />
            </UFormField>

            <UFormField
              label="Email Address"
              name="email"
              class="text-xs font-light"
            >
              <UInput v-model="state.email" type="email" class="w-full" />
            </UFormField>
          </div>

          <!-- Subject -->
          <UFormField label="Subject" name="subject" class="text-xs font-light">
            <UInput v-model="state.subject" class="w-full" />
          </UFormField>

          <!-- Message -->
          <UFormField
            label="Your Message Here..."
            name="message"
            class="text-xs font-light"
          >
            <UTextarea v-model="state.message" :rows="6" class="w-full" />
          </UFormField>
          <UButton type="submit" block size="xl">Send Message</UButton>
        </UForm>
      </div>
    </div>
  </UContainer>
  <div class="max-w-8xl mx-auto">
    <!-- <ClientOnly> -->
    <ContactLocationMap />
    <!-- </ClientOnly> -->
  </div>
</template>

<style scoped></style>
