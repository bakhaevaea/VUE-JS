import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modernKitchen: [
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__1.jpg'
      },
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__2.jpg'
      },
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__3.jpg'
      },
      {
        title: 'Modern Kitchen',
        subtitle: 'Decor / Artchitecture',
        image: 'card__4.jpg'
      }
    ],
    articlesBlog: [
      {
        header: 'Let’s Get Solution For Building Construction Work',
        date: '26 December,2022',
        image: 'article_1.jpg'
      },
      {
        header: 'Low Cost Latest Invented Interior Designing ',
        date: '22 December,2022',
        image: 'article_2.jpg'
      },
      {
        header: 'Best For Any Office & Business Interior',
        date: '25 December,2022',
        image: 'article_3.jpg'
      }
    ]
  },
  getters: {
    getModernKitchen: state => state.modernKitchen,
    getArticlesBlog: state => state.articlesBlog
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
