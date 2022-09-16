<template>
  <v-app-bar app height="64">
    <v-app-bar-nav-icon />
    <router-link to="/">
      <v-btn color="primary" class="mr-4">Home</v-btn>
    </router-link>
    <router-link to="/vue-single">
      <v-btn color="primary">Vue Single</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "VueHeader",
};
</script>