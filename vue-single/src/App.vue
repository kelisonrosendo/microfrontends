<template>
  <div id="app">
    <v-app :style="{ 'margin-left': width }">
      <vue-single />
    </v-app>
  </div>
</template>

<script>
import VueSingle from "@/components/vue-single.vue";

export default {
  name: "App",
  components: { VueSingle },
  data() {
    return {
      smallSizes: ["xs", "sm", "md"],
    };
  },
  computed: {
    width() {
      return this.smallSizes.includes(this.$vuetify.breakpoint.name)
        ? "0"
        : "256px";
    },
  },
};
</script>

