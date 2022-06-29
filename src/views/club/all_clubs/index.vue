<template>
  <div id="container">
    <template>
      <!-- 信息表格 -->
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        border
        style="width: 100%"
        
      >
        <el-table-column prop="name" label="社团名称" width="280">
        </el-table-column>
        <el-table-column label="头像" width="200">
          <template slot-scope="scope">
            <img :src="scope.row.ImageUrl" style="height: 80px" />
          </template>
        </el-table-column>
        <el-table-column prop="is_active" label="状态"></el-table-column>
        <el-table-column
          prop="type_name"
          label="社团所属分类"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row.id)" type="text" size="small"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </template>
  </div>
</template>


<script>
export default {
  name: 'AllClubs',
  data() {
    const item = {
      id:1,
      name: '学术社团',
      ImageUrl:
        'https://www.logosc.cn/uploads/output/2019/03/23/a1eb291ff536dbf1a537b1c02667992a.jpg?t=1553305487',
      is_active: '活跃',
      type_name: '学术科技类',
    }
    return {
      tableData: Array(40).fill(item),
      currentPage: 1, // 当前页码
      total: 24, // 总条数
      pageSize: 8, // 每页的数据条数
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    },
    goDetail(id){
      this.$router.push()
    }
  },
}
</script>

<style scoped>
#container {
  position: relative;
  height: 100%;
}

.el-pagination {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 0;
}
</style>