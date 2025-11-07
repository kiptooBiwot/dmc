<script setup>
import { ref } from 'vue'

const emit = defineEmits(['updateFiles'])
const file = ref(null)

const handleFileUpload = (event) => {
  const selectedFile = event.target.files[0]
  if (!selectedFile) return

  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain',
  ]
  const maxSize = 15 * 1024 * 1024 // 15MB

  if (!allowedTypes.includes(selectedFile.type)) {
    alert(
      'Invalid file type. Please upload an image, PDF, Word, or Excel document.'
    )
    return
  }

  if (selectedFile.size > maxSize) {
    alert('File too large. Max size is 15MB.')
    return
  }

  file.value = selectedFile
  emit('updateFiles', file.value)
}

const removeFile = () => {
  file.value = null
  emit('updateFiles', null)
}

defineExpose({ removeFile })
</script>

<template>
  <div>
    <label
      for="dropzone-file"
      class="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50"
    >
      <div class="mb-3 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 40 40"
        >
          <path
            d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589"
            stroke="#4F46E5"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <h2 class="text-center text-gray-400 text-xs font-normal mb-1">
        PNG, JPG, PDF, DOCX, XLSX (max 15MB)
      </h2>
      <h4 class="text-center text-gray-900 text-sm font-medium leading-snug">
        Drag and Drop or click to select a file
      </h4>
      <input
        id="dropzone-file"
        type="file"
        class="hidden"
        @change="handleFileUpload"
        accept="image/png, image/jpeg, image/webp, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/plain"
      />
    </label>

    <div
      v-if="file"
      class="flex items-center justify-between gap-2 p-2 border rounded mt-3"
    >
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="text-gray-500"
        >
          <path
            v-if="file.type.includes('image')"
            d="M12 2L2 12h3v8h14v-8h3L12 2z"
          />
          <path
            v-else
            d="M6 2h12l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM6 18h12v2H6v-2z"
          />
        </svg>
        <span class="text-gray-800 text-sm truncate">{{ file.name }}</span>
      </div>
      <button class="text-red-500 text-sm" @click="removeFile">Remove</button>
    </div>
  </div>
</template>
