<template>
  <v-app-bar app height="64">
    <v-app-bar-nav-icon @click="showMenu" />
    <v-app-bar-title>vue-header</v-app-bar-title>
    <v-spacer />
    <router-link to="/vue-main">
      <v-btn color="#41B883" dark class="mr-4">
        <v-icon left> mdi-vuejs</v-icon>
        Vue
      </v-btn>
    </router-link>
    <router-link to="/react-main">
      <v-btn color="#61DAFB" class="mr-4">
        <v-icon left> mdi-react</v-icon>
        React
      </v-btn>
    </router-link>
    <router-link to="/angular-main">
      <v-btn color="#DD0031" dark>
        <v-icon left> mdi-angular</v-icon>
        Angular
      </v-btn>
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

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>