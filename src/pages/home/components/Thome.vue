<template>
  <div class="thome">
        <el-form :inline="true" :model="formInline" class="demo-form-inline inline_left">
          <el-form-item label="审批人" class="person_lab">
            <el-input v-model="formInline.user" placeholder="审批人" class="user_input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="find_btn">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table
            ref="multipleTable"
            :data="tableData"
            border
            stripe
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
        <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别"
              width="120">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="240"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              align="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px" class="index_status">
            <el-button class="staus_No" @click="toggleSelection()">备用按钮</el-button>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
              class="pagination ">
            </el-pagination>
          </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeThome',
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          sex:'男',
          age:'18'
        }],
         multipleSelection: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .thome
      width :83%
      float right
      min-width 1100px
      line-height .42rem
      padding-left .2rem
      box-sizing border-box
      margin-right 1%
      position  relative
      .inline_left
        padding-top .06rem
        background #EEEEEE
        width 100%
        height .6rem
        float  left
        padding-left .2rem
        box-sizing border-box
        margin-bottom .2rem
        .person_lab
           float  left
           line-height .5rem
           height .5rem
        .user_input
          float  left
          padding-top .05rem
          box-sizing border-box
        .find_btn
          position : absolute
          left -6.4rem
          top .05rem
      .index_status
          width 100%
          height .52rem
          padding-top .07rem
          box-sizing border-box
          background  #eeeeee
          .staus_No
           float  left
           margin-left .07rem
          .pagination
            float  right
</style>
