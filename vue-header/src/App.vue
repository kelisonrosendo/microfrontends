<template>
  <div id="app">
    <v-app>
      <vue-header />
    </v-app>
  </div>
</template>

<script>
import VueHeader from "@/components/vue-header.vue";

export default {
  name: "App",
  components: { VueHeader },
};
</script>

<style scoped lang="scss">
:deep(.v-application--wrap) {
  min-height: fit-content;
}
</style>
