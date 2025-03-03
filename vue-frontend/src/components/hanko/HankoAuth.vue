<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { register } from "@teamhanko/hanko-elements";

import "../../style/hanko-style.css"

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const router = useRouter();

const redirectAfterLogin = () => {
  // successfully logged in, redirect to a page in your application
  router.push("/dashboard");
};

onMounted(() => {
  register(hankoApi)
    .catch((error) => {
      // handle error
      console.log(error);
    });
});
</script>

<template>
  <hanko-auth @onSessionCreated="redirectAfterLogin" />
</template>