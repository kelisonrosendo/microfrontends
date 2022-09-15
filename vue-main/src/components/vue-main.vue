
<template>
  <v-app :style="{ 'margin-left': width }">
    <v-main class="mt-16">
      <v-container fluid>
        <h1>Home</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "VueMain",
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