<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import { useBaseUrl, useToast } from '#imports'
import { definePageMeta } from '#imports'

// ✅ Page metadata
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const toast = useToast()

const baseUrl = useBaseUrl()

const InviteUserSchema = z.object({
  email: z
    .string('Email is required')
    .email('Please enter a valid email address'),
})

// ✅ Reactive form data
const formData = ref({
  email: '',
})

const isLoading = ref(false)

// ✅ Handle form submission
const handleSubmit = async () => {
  isLoading.value = true

  // 1️⃣ Validate input
  const validation = InviteUserSchema.safeParse(formData.value)
  if (!validation.success) {
    const firstError = validation.error.errors[0]?.message || 'Invalid input'
    toast.add({
      title: 'Validation Error',
      description: firstError,
      color: 'error',
    })
    return
  }

  try {
    const res: any = await $fetch(`${baseUrl}/auth/invite`, {
      method: 'POST',
      body: formData.value,
    })

    toast.add({
      title: 'Invite Sent',
      description: `An invite has been sent to ${formData.value.email}`,
      color: 'success',
    })

    // Reset the form
    formData.value.email = ''
  } catch (error: any) {
    toast.add({
      title: 'Error Sending Invite',
      description:
        error?.data?.message ||
        error?.message ||
        'Failed to send invite. Please try again.',
      color: 'error',
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <h2 class="font-medium text-xl text-primary mb-5">Invite New User</h2>

    <UCard>
      <UForm
        :schema="InviteUserSchema"
        :state="formData"
        @submit.prevent="handleSubmit"
      >
        <div class="space-y-4 p-4">
          <p class="text-gray-600">
            Fill in the details below to invite a new user.
          </p>

          <UFormField label="Email" name="email" class="text-xs" required>
            <UInput
              v-model="formData.email"
              type="email"
              placeholder="Enter email address"
              class="w-full"
            />
            <!-- required -->
          </UFormField>

          <div class="flex justify-end gap-2 mt-6">
            <UButton type="submit" color="primary" :loading="isLoading">
              Send Invite
            </UButton>

            <UButton to="/dashboard" variant="soft" color="primary">
              Cancel
            </UButton>
          </div>
        </div>
      </UForm>
    </UCard>
  </div>
</template>
