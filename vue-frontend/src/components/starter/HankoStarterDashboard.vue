<script setup lang="ts">
    import "../../style/hanko-starter-style.css"
    import { Hanko } from "@teamhanko/hanko-elements";

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;
    const hanko = new Hanko(hankoApi);

    const email = (await hanko?.getUser())?.emails?.[0].address;
    const id = (await hanko?.getUser())?.user_id;
</script>

<template>
    <div className='hankoStarterDashboard'>
        <h1>Dashboard</h1><br />
        <h2>Here is an example of how we can get user data using the Hanko Client.</h2>
        <br />
        <h3>Email: {{email}}</h3>
        <h3>Id: {{id}}</h3>
    </div>
</template>