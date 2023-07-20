<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>   
  </v-app>
</template>

<script>

import router from '../src/router.js'; 

export default {
  name: 'App',
  router,

  data: () => ({
    //
  }),
}
</script>
