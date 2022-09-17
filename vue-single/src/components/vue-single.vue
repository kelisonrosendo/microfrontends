<template>
  <v-main>
    <v-container fluid>
      <h2>vue-single</h2>
      <p>Esta é uma outra aplicação qualquer!</p>      
      <v-btn dark color="primary" @click.stop="drawer = !drawer">
        Open right drawer
      </v-btn>
      <v-navigation-drawer v-model="drawer" right fixed temporary>
        <v-container fluid>
          <h2>right-drawer</h2>
        </v-container>
      </v-navigation-drawer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            dark
            color="red lighten-2"
            class="ml-4"
          >
            Open Modal
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-sheet class="mt-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magnam,
        aspernatur quod iure, mollitia voluptatem aliquam odio commodi natus
        assumenda obcaecati labore accusamus dolorum soluta, ipsum esse
        repellendus hic beatae. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Amet magnam, aspernatur quod iure, mollitia voluptatem
        aliquam odio commodi natus assumenda obcaecati labore accusamus dolorum
        soluta, ipsum esse repellendus hic beatae.
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "VueSingle",
  data() {
    return {
      drawer: null,
      dialog: false,
    };
  },
};
</script>