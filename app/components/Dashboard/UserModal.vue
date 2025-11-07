<script setup lang="ts"></script>

<template>
  <div>
    <UModal>
      <template #header>
        <h3 class="text-lg font-semibold">Invite New User</h3>
      </template>
      <div class="space-y-4 p-4">
        <p class="text-gray-600">
          Fill in the details below to invite a new user.
        </p>

        <UFormGroup label="Full Name">
          <UInput placeholder="Enter full name" />
        </UFormGroup>

        <UFormGroup label="Email">
          <UInput type="email" placeholder="Enter email address" />
        </UFormGroup>

        <UFormGroup label="Role">
          <USelect
            :options="[
              { label: 'Admin', value: 'admin' },
              { label: 'Farmer', value: 'farmer' },
              { label: 'Retailer', value: 'retailer' },
            ]"
            placeholder="Select role"
          />
        </UFormGroup>

        <div class="flex justify-end gap-2 mt-6">
          <UButton
            variant="soft"
            color="primary"
            @click="inviteUserModal = false"
          >
            Cancel
          </UButton>

          <UButton color="primary"> Send Invite </UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>

<style scoped></style>
