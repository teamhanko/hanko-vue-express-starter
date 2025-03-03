<script setup lang="ts">
    import { useRouter,useRoute } from "vue-router";
    import { Hanko } from "@teamhanko/hanko-elements";
    import LogoutButton from "../hanko/LogoutButton.vue";

    import "../../style/hanko-starter-style.css"

    const route = useRoute()    
    const router = useRouter();

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;

    const hanko = new Hanko(hankoApi);
    const email = (await hanko?.user.getCurrent())?.email
</script>

<template>
    <div className='starterHeader'>
      <div className='headerGap'></div>
      <div className='userMenu'>
        <div className='userInfo'>
          <h1>{{email}}</h1>
          <img src="/userpfp.png"/>
          <img src="/expand.png" className='expandIcon'/>
        </div>
        <div className='userDropdown'>
            <button @click="router.push('/profile')" v-if="route.path.includes('dashboard') ">Profile</button>
            <button @click="router.push('/dashboard')" v-if="route.path.includes('profile')   ">Dashboard</button>
            <LogoutButton></LogoutButton>
        </div>
      </div>
    </div>  
</template>