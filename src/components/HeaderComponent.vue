<template>
    <div>
      <header class="header">
        <LogoComponent />
        <MenuComponent />
    </header>
    </div>
</template>

<script>
import LogoComponent from './LogoComponent.vue'
import MenuComponent from './MenuComponent.vue'

export default {
  name: 'HeaderComponent',

  data () { return {} },

  mounted () { },

  methods: {},
  components: {
    LogoComponent,
    MenuComponent
  }
}
</script>

<style lang="scss" scoped>
.header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 50px 0 60px;

}
</style>
