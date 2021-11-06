<template>
  
    <v-app>
      <TopToolbar></TopToolbar>
      <v-main>
        <router-view></router-view>
      </v-main>

      <BottomNav></BottomNav>

    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopToolbar from './components/TopToolbar.vue';
import BottomNav from './components/BottomNav.vue';


@Component({
  components: {
    TopToolbar,
    BottomNav
  },
  data () {
    return {
      backgroundColor: "#f6dadb",
      screenBackgroundColor: "#fefefe",
      screenLightShadow: "-31px -31px 62px #FAE0E0",
      screenDarkShadow: "31px 31px 62px #EAB6BE",
      isRounded: false,
    }
  }

})
export default class extends Vue {
}
</script>
