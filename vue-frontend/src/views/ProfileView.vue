<script setup lang="ts">
  import HankoStarterHeader from '../components/starter/HankoStarterHeader.vue'
  import HankoStarterInfo from '../components/starter/HankoStarterInfo.vue'
  import HankoProfile from '../components/hanko/HankoProfile.vue';
</script>

<template>
  <main>
    <Suspense>
      <HankoStarterHeader/>
    </Suspense>
    <HankoStarterInfo/>
    <HankoProfile></HankoProfile>
</main>
</template>