<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import {
  definePageMeta,
  onMounted,
  useAsyncData,
  useBaseUrl,
  useLazyFetch,
  useToast,
} from '#imports'
// import type { Period, Range, Stat } from '~/types'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const userStore = useUserStore()
const baseUrl = useBaseUrl()
const toast = useToast()

const props = defineProps<{
  period: Period
  range: Range
}>()

function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

const baseStats = [
  {
    title: 'Customers',
    icon: 'i-lucide-users',
    minValue: 400,
    maxValue: 1000,
    minVariation: -15,
    maxVariation: 25,
  },
  {
    title: 'Conversions',
    icon: 'i-lucide-chart-pie',
    minValue: 1000,
    maxValue: 2000,
    minVariation: -10,
    maxVariation: 20,
  },
  {
    title: 'Revenue',
    icon: 'i-lucide-circle-dollar-sign',
    minValue: 200000,
    maxValue: 500000,
    minVariation: -20,
    maxVariation: 30,
    formatter: formatCurrency,
  },
  {
    title: 'Orders',
    icon: 'i-lucide-shopping-cart',
    minValue: 100,
    maxValue: 300,
    minVariation: -5,
    maxVariation: 15,
  },
]

// const { data: stats } = await useAsyncData<Stat[]>(
//   'stats',
//   async () => {
//     return baseStats.map((stat) => {
//       const value = randomInt(stat.minValue, stat.maxValue)
//       const variation = randomInt(stat.minVariation, stat.maxVariation)

//       return {
//         title: stat.title,
//         icon: stat.icon,
//         value: stat.formatter ? stat.formatter(value) : value,
//         variation,
//       }
//     })
//   },
//   {
//     watch: [() => props.period, () => props.range],
//     default: () => [],
//   }
// )

const items = [
  [
    {
      label: 'New mail',
      icon: 'i-lucide-send',
      to: '/inbox',
    },
    {
      label: 'New customer',
      icon: 'i-lucide-user-plus',
      to: '/customers',
    },
  ],
] satisfies DropdownMenuItem[][]

const {
  pending,
  data: users,
  error,
  refresh,
} = useLazyFetch(`${baseUrl}/auth/users`, {
  method: 'GET',

  onRequestError({ error }) {
    console.error('❌ Request error:', error)
    toast.add({
      title: 'Request Error',
      description:
        error?.message || 'An error occurred while making the request.',
      color: 'error',
    })
  },

  onResponseError({ response }) {
    console.error('❌ Response error:', response)
    toast.add({
      title: 'Response Error',
      description:
        response?._data?.message ||
        response?.statusText ||
        'Failed to fetch users from the server.',
      color: 'error',
    })
  },

  onResponse({ response }) {
    console.log('✅ Response received:', response)

    userStore.users = response._data?.users

    toast.add({
      title: 'Success',
      description: 'All users populated!',
      color: 'success',
    })
  },
})

onMounted(async () => {
  // await userStore.getAllUsers()
  refresh()
})

const summaryStats = [
  {
    title: 'Total Users',
    icon: 'i-lucide-users',
    // number: '2,435',
    // minVariation: -15,
    // maxVariation: 25,
  },
  // {
  //   title: 'Total Instructors',
  //   icon: 'i-lucide-user-round-pen',
  //   number: '2,435',
  //   minVariation: -15,
  //   maxVariation: 25,
  // },
  // {
  //   title: 'Monthly Revenue',
  //   icon: 'i-material-symbols-attach-money',
  //   number: '150,000',
  //   minVariation: -15,
  //   maxVariation: 25,
  // },
  {
    title: 'Active Articles',
    icon: 'i-lucide-book-open-text',
    // number: '2,435',
    // minVariation: -15,
    // maxVariation: 25,
  },
  // {
  //   title: 'New Enrollments',
  //   icon: 'i-lucide-chart-spline',
  //   number: '2,435',
  //   minVariation: -15,
  //   maxVariation: 25,
  // },
]

const inviteUserModal = ref(false)
const openInviteUserModal = () => (inviteUserModal.value = true)
const closeInviteUserModal = () => (inviteUserModal.value = false)

// const showInviteUserModal = () => {
//   inviteUserModal.value = true
// }
</script>

<template>
  <div class="space-y-4">
    <UPageGrid class="lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-px">
      <UPageCard
        v-for="(stat, index) in summaryStats"
        :key="index"
        :icon="stat.icon"
        :title="stat.title"
        to="/customers"
        variant="subtle"
        :ui="{
          container: 'gap-y-1.5',
          wrapper: 'items-start',
          leading:
            'p-2.5 rounded-full bg-primary/10 ring ring-inset ring-primary/25 flex-col',
          title: 'font-normal text-muted text-xs uppercase',
        }"
        class="lg:rounded-none first:rounded-l-lg last:rounded-r-lg hover:z-1"
      >
        <div class="flex items-center gap-2">
          <span class="text-2xl font-semibold text-highlighted">
            {{ stat.number }}
          </span>
        </div>
      </UPageCard>
    </UPageGrid>

    <div class="space-y-4">
      <div class="flex justify-between">
        <h3 class="font-semibold text-lg mt-5">All Users</h3>

        <UButton
          icon="i-lucide-plus"
          size="md"
          variant="solid"
          to="/dashboard/invite-user"
          >Invite New User</UButton
        >
      </div>
      <UCard>
        <!-- <DashboardHomeAdministrationRecentUsers /> -->

        <ULoader v-if="pending" size="xl" class="text-primary" />

        <p v-else-if="error" class="text-red-500">
          {{ error.message || 'Failed to load users' }}
        </p>

        <div v-else class="">
          <!-- {{ userStore.users }} -->

          <div v-if="userStore.users">
            <DashboardUsers />
          </div>
        </div>
      </UCard>
      <h3 class="font-semibold text-lg mt-10">All News Articles</h3>
      <UCard>
        <!-- <DashboardHomeAdministrationRecentCourses /> -->
      </UCard>
    </div>
  </div>
</template>
