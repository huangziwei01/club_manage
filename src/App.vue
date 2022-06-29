<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <SideBar/>
      <MainContent/>
    </el-container>
  </div>
</template>

<script>
// import Login from '@/views/login'
import SideBar from '@/components/sidebar'
import MainContent from '@/components/main_content'

export default {
  name: 'App',
  components: {
    SideBar,
    MainContent
  },
}
</script>

<style scoped>
@import 'assets/css/base.css';
</style>
