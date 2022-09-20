<template>
  <v-navigation-drawer v-model="showMenu" app stateless clipped color="grey lighten-2">
    <v-container fluid class="mt-16">
      <h2>vue-menu</h2>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "VueMenu",
  data() {
    return {
      showMenu: true,
    };
  },
  mounted() {
    window.addEventListener("vue-header/showMenu", () => {
      this.showMenu = !this.showMenu;

      dispatchEvent(
        new CustomEvent("vue-menu/showMenu", {
          detail: { value: this.showMenu },
        })
      );
    });
  },
};
</script>