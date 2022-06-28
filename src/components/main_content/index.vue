<template>
  <div id="mainContent">
    <el-container>
      <el-header style="font-size: 12px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>

        <el-dropdown>
          <span>用户</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "MainContent",
};
</script>

<style scoped>
#mainContent {
  width: 100vw;
  height: 100vh;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #000;
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  height: 80px;
}

.el-breadcrumb {
  width: 95%;
}
</style>