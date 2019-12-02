<template>
    <div class="header">
        <div class="header-left">
            <p class="header_name">简历管理系统</p>
        </div>
        <div class="header-right">
            <div class="header-img">
                <a>
                    <img src="../../../assets/logo.png" />
                </a>
            </div>
            <p class="header-uname">汇金智融HR</p>
        </div>
    </div>
</template>

<script>
  export default{
      name:'HomeHeader',
  }
</script>

<style lang="stylus" scoped>
  .header
    width: 100%;
    height: .62rem;
    background: #20a0ff;
    float: left;
    .header-left
      width : 15%
      height .62rem
      outline :1px solid #f2f4f6
      float :left
      .header_name
          text-align center
          font-size :0.20rem
          line-height .62rem
          height :.62rem
          color #fff
    .header-right
      position relative
      box-sizing: border-box
      width 85%
      height .62rem
      float right
      padding-top 10px
      padding-right 40px
      .header-img
        float :right
        width :42px
        height :42px
        border-radius 50%
        img
          width 100%
          height auto
      .header-uname
        position absolute
        top 10
        right 110px
        line-height :42px
        font-size .18rem
        color #fff
</style>
