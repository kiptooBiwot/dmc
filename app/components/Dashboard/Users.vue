<script setup lang="ts">
import { h, computed, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/vue-table'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'
import { useToast } from '#imports'

const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const toast = useToast()
const authStore = useAuthStore()
const userStore = useUserStore()

type User = {
  _id: string
  firstName: string
  surname: string
  email: string
  role: string
  lastLogin: Date
}

const data = computed(() => userStore.users)

function confirmDelete(user: User) {
  // show a confirmation toast
  toast.add({
    title: 'Confirm Deletion',
    description: `Are you sure you want to delete ${user.firstName} ${user.surname}?`,
    color: 'warning',
    timeout: 0,
    actions: [
      {
        label: 'Yes, Delete',
        color: 'error',
        onClick: () => deleteUserConfirmed(user),
      },
      {
        label: 'Cancel',
        color: 'neutral',
        variant: 'soft',
      },
    ],
  })
}

async function deleteUserConfirmed(user: User) {
  try {
    await authStore.deleteUser(user._id)
    toast.add({
      title: `${user.firstName} ${user.surname} deleted successfully`,
      color: 'success',
      icon: 'i-lucide-check',
    })
  } catch (error) {
    toast.add({
      title: 'Failed to delete user',
      color: 'error',
      icon: 'i-lucide-x-circle',
    })
  }
}

const columns: TableColumn<User>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'surname',
    header: 'Surname',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'lastLogin',
    header: 'Last Login',
    cell: ({ row }) =>
      new Date(row.getValue('lastLogin')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) =>
      h(
        'div',
        { class: 'text-right' },
        h(
          UDropdownMenu,
          {
            content: { align: 'end' },
            items: getRowItems(row),
            'aria-label': 'Actions dropdown',
          },
          () =>
            h(UButton, {
              icon: 'i-lucide-ellipsis-vertical',
              color: 'neutral',
              variant: 'ghost',
              class: 'ml-auto',
            })
        )
      ),
  },
]

function getRowItems(row: Row<User>) {
  return [
    {
      label: 'Delete user',
      icon: 'i-lucide-trash',
      class: 'text-red-500',
      onSelect: () => confirmDelete(row.original),
    },
  ]
}
</script>

<template>
  <div>
    <UTable :data="data" :columns="columns" class="flex-1" />
  </div>
</template>
