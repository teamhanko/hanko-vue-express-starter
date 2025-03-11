<script setup lang="ts">
  import HankoStarterHeader from '../components/starter/HankoStarterHeader.vue'
  import HankoStarterInfo from '../components/starter/HankoStarterInfo.vue'
  import HankoStarterDashboard from '../components/starter/HankoStarterDashboard.vue'
</script>
  
<template>
  <main>
    <Suspense>
      <HankoStarterHeader/>
    </Suspense>
    <Suspense>
      <HankoStarterDashboard/>
    </Suspense>
    <HankoStarterInfo/>
  </main>
</template>
