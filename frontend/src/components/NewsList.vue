<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="newsArticle in newsArticles" :key="newsArticle.id">
          <v-card>
            <v-container fluid grid-list-lg>
              <router-link
                :to="{ path: '/route' }"
                 style="text-decoration: none; color: inherit;"
                active-class=""
                exact-path-active-class=""
                exact-active-class=""
              >
              <v-layout row >
                <v-flex xs7>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{ newsArticle.title }}
                    </div>
                    <div>{{ newsArticle.dateString }}</div>
                  </div>
                </v-flex>
                <v-flex xs2>
                  <div class="subheading font-weight-small">
                      <strong>{{ newsArticle.content }} kg C0<small>2</small></strong>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    :src="`/thumbnails/${newsArticle.baseImageName}.png`"
                    :srcset="`/thumbnails/${newsArticle.baseImageName}.png 1x,
                             /thumbnails/${newsArticle.baseImageName}@2x.png 2x`"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
              </router-link>

            </v-container>
          </v-card>
        </v-flex>

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
