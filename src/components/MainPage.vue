<template>
    <div>
        <HeaderComponent />
        <BannerComponent />
        <MainGaleryComponent />
        <CounterComponent />
        <ArticlesNewComponent />
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import BannerComponent from './BannerComponent.vue'
import MainGaleryComponent from './MainGaleryComponent.vue'
import CounterComponent from './CounterComponent.vue'
import ArticlesNewComponent from './ArticlesNewComponent.vue'

export default {
  name: 'MainPage',

  data () { return {} },

  mounted () { },

  methods: {},
  components: {
    HeaderComponent,
    BannerComponent,
    MainGaleryComponent,
    CounterComponent,
    ArticlesNewComponent
  }
}
</script>

<style lang="scss" scoped>
</style>
