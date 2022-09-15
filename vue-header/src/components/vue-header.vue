<template>
  <v-app>
    <v-app-bar app height="64">
      <router-link to="/">
        <v-btn color="primary" class="mr-4">Home</v-btn>
      </router-link>
      <router-link to="/vue-single">
        <v-btn color="primary">Vue Single</v-btn>
      </router-link>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "VueHeader",
};
</script>

<style scoped lang="scss">
:deep(.v-application--wrap) {
  min-height: fit-content;
}
</style>