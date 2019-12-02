<template>
    <div>
        <home-header></home-header>
        <home-navigation></home-navigation>
        <home-table></home-table>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeNavigation from './components/Navigation'
  import HomeTable from './components/Table'
  export default{
    name:'Home',
    components:{
      HomeHeader,
      HomeNavigation,
      HomeTable
    }

  }
</script>

<style scoped>
</style>
