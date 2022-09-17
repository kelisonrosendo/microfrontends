<template>
  <div id="app">
    <v-app>
      <vue-main />
    </v-app>
  </div>
</template>

<script>
import VueMain from "@/components/vue-main.vue";

export default {
  name: "App",
  components: { VueMain },
};
</script>

<style scoped lang="scss">
:deep(.v-application--wrap) {
  min-height: fit-content;
}
</style>