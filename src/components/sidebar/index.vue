<template>
  <div id="sidebar">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        router
        :default-openeds="[]"
        :default-active="this.$router.path"
      >
        <el-menu-item index="/dataview"
          ><i class="el-icon-s-home"></i>首页</el-menu-item
        >

        <el-menu-item index="/account"
          ><i class="el-icon-s-order"></i>账号</el-menu-item
        >
        <el-menu-item index="/role"
          ><i class="el-icon-s-custom"></i>角色</el-menu-item
        >

        <el-menu-item index="/sort"
          ><i class="el-icon-s-flag"></i>社团分类</el-menu-item
        >

        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-data-analysis"></i>社团公告</template
          >
          <el-menu-item index="/notice/manage">公告管理</el-menu-item>
          <el-menu-item index="/notice/first_check">公告一级审核</el-menu-item>
          <el-menu-item index="/notice/second_check">公告二级审核</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-menu"></i>社团管理</template
          >
          <el-menu-item index="/club/all_clubs">全部社团</el-menu-item>
          <el-submenu index="2-2">
            <template slot="title">我的社团</template>
            <el-menu-item index="/club/my_club/members">社团成员</el-menu-item>
            <el-menu-item index="2-2-2">社团活动</el-menu-item>
            <el-menu-item index="2-2-3">退团申请</el-menu-item>
            <el-menu-item index="2-2-4">申请换届</el-menu-item>
            <el-menu-item index="2-2-5">注销社团</el-menu-item>
          </el-submenu>
          <el-menu-item index="/club/first_club">社团申请一级审核</el-menu-item>
          <el-menu-item index="/club/second_club">社团申请二级审核</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-date"></i>社团活动</template>
          <el-menu-item index="">全部活动</el-menu-item>
          <el-submenu index="3-2">
            <template slot="title">我的活动</template>
            <el-menu-item index="3-2-1">活动详情</el-menu-item>
            <el-menu-item index="3-2-2">活动记录</el-menu-item>
            <el-menu-item index="3-2-3">新增活动记录</el-menu-item>
          </el-submenu>
          <el-menu-item index="">活动申请一级审核</el-menu-item>
          <el-menu-item index="">活动申请二级审核</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"
            ><i class="el-icon-document"></i>社团活动记录</template
          >
          <el-menu-item index="">全部记录</el-menu-item>
          <el-menu-item index="">活动记录一级审核</el-menu-item>
          <el-menu-item index="">活动记录二级审核</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"
            ><i class="el-icon-connection"></i>社团换届</template
          >
          <el-menu-item index="">换届管理</el-menu-item>
          <el-menu-item index="">换届一级审核</el-menu-item>
          <el-menu-item index="">换届二级审核</el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title"
            ><i class="el-icon-folder-delete"></i>社团注销</template
          >
          <el-menu-item index="">注销管理</el-menu-item>
          <el-menu-item index="">注销一级审核</el-menu-item>
          <el-menu-item index="">注销二级审核</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  components: {},
}
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