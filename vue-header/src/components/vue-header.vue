<template>
  <v-app-bar app height="64">
    <v-app-bar-nav-icon @click="showMenu" />
    <v-app-bar-title>vue-header</v-app-bar-title>
    <v-spacer />
    <router-link to="/">
      <v-btn color="primary" class="mr-4">Vue Main</v-btn>
    </router-link>
    <router-link to="/vue-single">
      <v-btn color="primary">Vue Single</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "VueHeader",
  methods: {
    showMenu() {
      dispatchEvent(new CustomEvent("vue-header/showMenu"));
    },
  },
};
</script>