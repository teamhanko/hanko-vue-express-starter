<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <main>
    <button @click="navigateToLogin">Login</button>
  </main>
</template>
