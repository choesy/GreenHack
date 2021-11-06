<template>

  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    color="primary"
  >
    <v-btn value="top" :to="{ path: '/'}">
      <span>Home</span>
      <v-icon>thumb_up</v-icon>
    </v-btn>

    <v-btn value="code" :to="{ name: 'code-examples'}">
      <span>Recent routes</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn value="favorites" :to="{ name: 'my-favorites'}">
      <span>Challenges</span>
      <v-icon>favorite</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomNav extends Vue {
  activeItem = 'top';
}
</script>

<style scoped>
  .v-btn {
    letter-spacing: normal;
  }
</style>
