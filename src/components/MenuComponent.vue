<template>
    <div>
        <nav class="menu">
        <p @click="$router.push({name:'main'})" class="menu__link">Home</p>
        <p @click="$router.push({name:'404'})" class="menu__link">Project</p>
        <p @click="$router.push({name:'blog'})" class="menu__link">Blog</p>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'MenuComponent',

  data () {
    return { }
  },

  mounted () { },

  methods: { }
}
</script>

<style lang="scss" scoped>
@import 'vars';

.menu {
display: flex;
justify-content: space-between;
align-items: center;
width: 243px;

&__link {
    text-decoration: none;
    cursor: pointer;
    color: $siteColorBlack;
    font-family: Jost, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

}
</style>
