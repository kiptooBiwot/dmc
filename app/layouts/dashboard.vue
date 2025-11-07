<script setup>
// import AppLogo from '~/components/AppLogo.vue'
import { useAuthStore } from '~/stores/auth.js'

const route = useRoute()
const authStore = useAuthStore()
const toast = useToast()
const router = useRouter()

const items = [
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
      to: '/dashboard/profile',
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      onSelect: async () => {
        const res = await authStore.signOut()

        if (res.success) {
          // toast(res.message || 'Logout successful', 'success')
          toast.add({
            title: 'Success',
            description: res.message || 'Logout successful',
            color: 'success',
          })

          router.push('/auth/signin')
        } else {
          toast.add(res.message || 'Logout failed', 'error')
        }
      },
      // to: '/profile',
    },
  ],
]

const open = ref(false)

const links = [
  [
    {
      label: 'Dashboard',
      icon: 'i-lucide-layout-dashboard',
      to: '/dashboard',
      onSelect: () => {
        open.value = false
      },
    },
    {
      label: 'Users',
      icon: 'i-lucide-users',
      to: '/dashboard/invite-user',
      // badge: '4',
      onSelect: () => {
        open.value = false
      },
    },
    {
      label: 'Articles',
      icon: 'i-lucide-book-open',
      to: '/dashboard/new-article',
      onSelect: () => {
        open.value = false
      },
    },
    // {
    //   label: 'Revenue',
    //   icon: 'i-lucide-circle-dollar-sign',
    //   to: '/dashboard/revenue',
    //   onSelect: () => {
    //     open.value = false
    //   },
    // },
  ],
  [
    // {
    //   label: 'Feedback',
    //   icon: 'i-lucide-message-circle',
    //   to: 'https://github.com/nuxt-ui-pro/dashboard',
    //   target: '_blank',
    // },
    // {
    //   label: 'Help & Support',
    //   icon: 'i-lucide-info',
    //   to: 'https://github.com/nuxt/ui-pro',
    //   target: '_blank',
    // },
  ],
]

const groups = computed(() => [
  {
    id: 'links',
    label: 'Go to',
    items: links.flat(),
  },
  {
    id: 'code',
    label: 'Code',
    items: [
      {
        id: 'source',
        label: 'View page source',
        icon: 'i-simple-icons-github',
        to: `https://github.com/nuxt-ui-pro/dashboard/blob/main/app/pages${
          route.path === '/' ? '/index' : route.path
        }.vue`,
        target: '_blank',
      },
    ],
  },
])

let user = reactive(null)
let fullName = reactive(null)

onMounted(async () => {
  const cookie = useCookie('cookie-consent')
  const cookieUser = useCookie('user')

  if (!user) {
    user = cookieUser.value
    fullName = cookieUser.value.firstName + ' ' + cookieUser.value.surname
  }

  if (cookie.value === 'accepted') {
    return
  }

  toast.add({
    title:
      'We use first-party cookies to enhance your experience on our website.',
    duration: 0,
    close: false,
    actions: [
      {
        label: 'Accept',
        color: 'neutral',
        variant: 'outline',
        onClick: () => {
          cookie.value = 'accepted'
        },
      },
      {
        label: 'Opt out',
        color: 'neutral',
        variant: 'ghost',
      },
    ],
  })
})
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header="{ collapsed }">
        <!-- <AppLogo v-if="!collapsed" /> -->
        <!-- <CollapsedLogo v-else /> -->
        <!-- <TeamsMenu :collapsed="collapsed" /> -->
        <h3 class="text-3xl font-semibold">DMC</h3>
      </template>

      <template #default="{ collapsed }">
        <USeparator />
        <!-- <UDashboardSearchButton
          :collapsed="collapsed"
          class="bg-transparent ring-default"
        /> -->

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[1]"
          orientation="vertical"
          tooltip
          class="mt-auto"
        />
      </template>

      <!-- <template #footer="{ collapsed }">
        <UserMenu :collapsed="collapsed" />
      </template> -->
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />

    <UDashboardPanel id="home" class="bg-white">
      <template #header>
        <UDashboardNavbar title="Admin Dashboard" :ui="{ right: 'gap-3' }">
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>

          <template #right>
            <UTooltip text="Notifications" :shortcuts="['N']">
              <!-- <UButton
              color="neutral"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip color="error" inset>
                <UIcon name="i-lucide-bell" class="size-5 shrink-0" />
              </UChip>
            </UButton> -->
            </UTooltip>

            <UDropdownMenu :items="items">
              <!-- <UButton icon="i-lucide-plus" size="md" class="rounded-full" /> -->
              <UButton variant="ghost">
                <UUser
                  :name="fullName"
                  :description="user?.email"
                  :avatar="{
                    src: 'https://i.pravatar.cc/150?u=john-doe',
                    icon: 'i-lucide-image',
                  }"
                  :chip="{
                    color: 'primary',
                    position: 'top-right',
                  }"
                />
              </UButton>
            </UDropdownMenu>
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel>

    <!-- <NotificationsSlideover /> -->

    <!-- <UDashboardPage> -->
    <!-- <UDashboardPanel id="home">
      <template #header>
        <UDashboardNavbar title="Home" :ui="{ right: 'gap-3' }">
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>
          <template #right>
            <UTooltip text="Notifications" :shortcuts="['N']">
              <UButton
                color="neutral"
                variant="ghost"
                square
                @click="isNotificationsSlideoverOpen = true"
              >
                <UChip color="error" inset>
                  <UIcon name="i-lucide-bell" class="size-5 shrink-0" />
                </UChip>
              </UButton>
            </UTooltip>
            <UDropdownMenu :items="items">
              <UButton icon="i-lucide-plus" size="md" class="rounded-full" />
            </UDropdownMenu>
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel> -->
    <!-- </UDashboardPage> -->
  </UDashboardGroup>
</template>
