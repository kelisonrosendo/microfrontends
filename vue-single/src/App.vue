<template>
  <div id="app">
    <v-app>
      <vue-single />
    </v-app>
  </div>
</template>

<script>
import VueSingle from "@/components/vue-single.vue";

export default {
  name: "App",
  components: { VueSingle },
};
</script>

<style scoped lang="scss">
:deep(.v-application--wrap) {
  min-height: fit-content;
}
</style>
