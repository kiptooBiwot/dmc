<script setup>
import { ref, computed, onMounted } from 'vue'
import { useArticlesStore } from '@/stores/article'
import { definePageMeta, useToast, useBaseUrl } from '#imports'
import * as z from 'zod'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const baseUrl = useBaseUrl()
const articleStore = useArticlesStore()
const toast = useToast()

// ✅ Schema validation
const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  file: z
    .any()
    .refine(
      (file) =>
        file &&
        (file instanceof File || (Array.isArray(file) && file.length > 0)),
      'File is required'
    ),
})

const uploadRef = ref(null)
const form = ref({
  title: '',
  description: '',
  file: null,
})

const deletingId = ref(null) // ✅ track file being deleted

const handleFilesUpdate = (file) => {
  form.value.file = file
}

const formattedBaseUrl = computed(() => baseUrl.replace(/\/api\/v\d+$/, ''))

// ✅ Submit form
const submitForm = async () => {
  try {
    schema.parse(form.value)

    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('description', form.value.description)
    formData.append('file', form.value.file)

    await articleStore.uploadArticle(formData)

    toast.add({
      title: 'Success',
      description: 'File uploaded successfully!',
      color: 'success',
    })

    form.value = { title: '', description: '', file: null }
  } catch (error) {
    if (error.errors) {
      toast.add({
        title: 'Validation error',
        description: error.errors[0].message,
        color: 'error',
      })
    } else {
      toast.add({
        title: 'Error',
        description: 'Failed to upload file',
        color: 'error',
      })
    }
  }
}

// ✅ Delete article
const deleteFile = async (id) => {
  if (!confirm('Are you sure you want to delete this file?')) return
  deletingId.value = id
  try {
    await articleStore.deleteArticle(id)
    toast.add({
      title: 'Deleted',
      description: 'File deleted successfully.',
      color: 'success',
    })
  } catch (error) {
    toast.add({
      title: 'Error',
      description: 'Failed to delete file.',
      color: 'error',
    })
  } finally {
    deletingId.value = null
  }
}

onMounted(() => {
  articleStore.fetchArticles()
})
</script>

<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-semibold text-primary">Upload New File</h1>

    <UCard class="p-6">
      <UForm
        :schema="schema"
        :state="form"
        @submit.prevent="submitForm"
        class="space-y-4"
      >
        <UFormField label="Title" name="title" required class="text-xs">
          <UInput
            v-model="form.title"
            placeholder="Enter file title"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Description" name="description" class="text-xs">
          <UTextarea
            v-model="form.description"
            placeholder="Enter file description (optional)"
            class="w-full"
          />
        </UFormField>

        <UFormField label="File" name="file" required class="text-xs">
          <UploadImages ref="uploadRef" @update-files="handleFilesUpdate" />
        </UFormField>

        <UButton
          :loading="articleStore.loading"
          color="primary"
          type="submit"
          block
        >
          Submit
        </UButton>
      </UForm>
    </UCard>

    <!-- Uploaded Files -->
    <div>
      <h2 class="text-xl font-semibold text-gray-800 mt-8 mb-3">
        Uploaded Files
      </h2>

      <div v-if="articleStore.loading" class="text-gray-500">
        Loading files...
      </div>

      <div
        v-if="articleStore.articles.length === 0 && !articleStore.loading"
        class="text-gray-400"
      >
        No files uploaded yet.
      </div>

      <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
        <UCard
          v-for="file in articleStore.articles"
          :key="file._id"
          class="p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
        >
          <div>
            <h3 class="font-semibold text-primary text-lg">{{ file.title }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ file.description }}</p>

            <div class="mt-4">
              <a
                :href="`${formattedBaseUrl}${file.fileUrl}`"
                target="_blank"
                class="text-blue-500 hover:underline text-sm"
              >
                View File
              </a>
            </div>
          </div>

          <div class="flex justify-between items-center mt-4">
            <span class="text-xs text-gray-400">{{
              new Date(file.createdAt).toLocaleString()
            }}</span>

            <UButton
              color="error"
              variant="outline"
              size="xs"
              :loading="deletingId === file._id"
              @click="deleteFile(file._id)"
            >
              Delete Item
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
