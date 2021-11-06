import { ArticleType, NewsArticle } from '@/types';

const url = '/data/articles.json';

class RouteService {

  getRoutes() {
    
    return [
      {
        routeId: 1
      }
    ]
  }

}

export default new RouteService();
