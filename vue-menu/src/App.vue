<template>
  <div id="app">
    <v-app>
      <vue-menu />
    </v-app>
  </div>
</template>

<script>
import VueMenu from "@/components/vue-menu.vue";

export default {
  name: "App",
  components: { VueMenu },
};
</script>

<style scoped lang="scss">
:deep(.v-application--wrap) {
  min-height: fit-content;
}
</style>
