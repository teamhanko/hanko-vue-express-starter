<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

import HankoProfile from '@/components/HankoProfile.vue'
import LogoutButton from '@/components/LogoutButton.vue'

const navigateToProtected = () => {
  router.push('/protected')
}

</script>

<template>
  <main>
    <HankoProfile />
      <div>
      <LogoutButton />
      <button @click="navigateToProtected">Access the protected page</button>
    </div>
  </main>
</template>
