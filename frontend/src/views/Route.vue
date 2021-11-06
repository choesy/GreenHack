<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        
        <h1>HIHIHIHI</h1>

      </v-layout>
    </v-container>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, } from 'vue-property-decorator';
import { NewsArticle } from '@/types';

@Component
export default class NewsList extends Vue {
  @Prop({ type: Array, required: true }) newsArticles!: NewsArticle[];
}
</script>
