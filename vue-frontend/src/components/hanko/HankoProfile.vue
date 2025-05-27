<script setup lang="ts">
  import { onMounted } from "vue";
  import { register } from "@teamhanko/hanko-elements";

  const hankoApi = import.meta.env.VITE_HANKO_API_URL;

  onMounted(() => {
    register(hankoApi).catch((error) => {
      // handle error
      console.log(error)
    });
  });
</script>

<template>
  <hanko-profile />
</template>