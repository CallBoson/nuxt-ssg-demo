<template>
  <div class="container-fluid">
    <NavBar />
    <nuxt-child />
    <FooterItem />
  </div>
</template>

<script>
import NavBar from '../components/NavBar/NavBar.vue'
import FooterItem from '@/components/FooterItem.vue'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    FooterItem
  }
}
</script>

<style lang="scss" scoped>
/*fade效果*/
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.container-fluid {
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
