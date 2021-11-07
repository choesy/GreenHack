<template>

  <div>
    <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
    />

  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import newsService from '../services/newsService';
import NewsList from '../components/NewsList.vue';
import { ArticleType, NewsArticle } from '@/types';


@Component({
  components: {
    NewsList,
  }
})
export default class TopStories extends Vue {
  newsArticles: NewsArticle[] = [];

   data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
          ['Task', 'Hours per Day'],
          ['CO2 saved',     8],
          ['Gray',      2],
          ['Transparent',  2],

      ],
      chartOptions: {
          title: "Co2 Statistics",
          pieHole: 0.8,
          legend: 'none',
          slices: {
            0: { color: 'green' },
            1: { color: 'gray' },
            2: { color: 'transparent' }
          },
          pieStartAngle: 210,


      }
    }
  }

  mounted () {
    newsService.getArticlesByType(ArticleType.TopStory)
      .then((newsArticles: NewsArticle[]) => {
        this.newsArticles = newsArticles;
      });
  }
}
</script>
