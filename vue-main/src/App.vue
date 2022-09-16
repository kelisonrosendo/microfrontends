<template>
  <div id="app">
    <v-app :style="{ 'margin-left': width }">
      <vue-main />
    </v-app>
  </div>
</template>

<script>
import VueMain from "@/components/vue-main.vue";

export default {
  name: "App",
  components: { VueMain },
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