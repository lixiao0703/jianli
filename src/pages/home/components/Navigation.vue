<template>
  <div class="naviga" style="height: 100%;">
      <ul class="naviga-ul">
        <el-row class="tac">
            <el-col>
              <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>简历中心</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">简历表单处理中心</template>
                    <el-menu-item index="1-1">简历表单</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </ul>
  </div>
</template>

<script>
  export default{
    name:'HomeNavigation',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .naviga
        width : 15%
        min-width 210px
        background :#f2f2f2
        float left
        min-height :8.6rem
        .naviga-ul
          width :100%
</style>
