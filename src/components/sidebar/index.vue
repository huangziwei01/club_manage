<template>
  <div id="sidebar">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']" :default-active="this.$router.path">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-s-home"></i>首页</template
          >
          <el-menu-item index="/dataview">社团数据与公告</el-menu-item>
          
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-tickets"></i>账号管理</template
          >
          <el-menu-item index="basicInfo">社团信息</el-menu-item>
          <el-menu-item index="/recruit">社团招新</el-menu-item>
          <el-menu-item index="">社团每月活动管理</el-menu-item>
          <el-menu-item index="">退团管理</el-menu-item>
          <el-menu-item index="">团员管理</el-menu-item>
          <el-menu-item index="/excel">导出excel</el-menu-item>

        </el-submenu>

        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-tickets"></i>指导老师</template
          >
          <el-menu-item index="">查看本团学生</el-menu-item>
          <el-menu-item index="">审核本团新生申请</el-menu-item>
          <el-menu-item index="">审核本团退团申请</el-menu-item>
          <el-menu-item index="">审核社团申请场地</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-tickets"></i>会长</template>
          <el-menu-item index="">活动申请</el-menu-item>
          <el-menu-item index="">注销社团</el-menu-item>
          <el-menu-item index="">换届功能</el-menu-item>
          <el-menu-item index="">新学期社团注册</el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title"><i class="el-icon-tickets"></i>学生</template>
          <el-menu-item index="">申请入团</el-menu-item>
          <el-menu-item index="">申请退团</el-menu-item>
          <el-menu-item index="">查看每月活动</el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title"><i class="el-icon-tickets"></i>申请成立社团</template>
          <el-menu-item index="">提交申请</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  components: {},
  
};
</script>

<style scoped>
.el-aside {
  height: 100%;
  color: #333;
}

.el-submenu {
  font-size: 20px;
}
</style>