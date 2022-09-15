<template>
  <v-app>
    <v-navigation-drawer app clipped color="grey lighten-2">
      <v-container fluid class="mt-16"> Menu </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "VueMenu",
};
</script>

<style scoped lang="scss">
:deep(.v-application--wrap) {
  min-height: fit-content;
}
</style>