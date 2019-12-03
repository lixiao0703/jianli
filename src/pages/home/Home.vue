<template>
    <div>
        <home-header></home-header>
        <home-table></home-table>
        <home-navigation></home-navigation>
        <home-thome></home-thome>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeNavigation from './components/Navigation'
  import HomeTable from './components/Table'
  import HomeThome from './components/Thome'
  export default{
    name:'Home',
    components:{
      HomeHeader,
      HomeNavigation,
      HomeTable,
      HomeThome
    }

  }
</script>

<style scoped>
</style>
