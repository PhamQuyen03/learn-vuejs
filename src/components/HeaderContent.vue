<template>
<div>
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-light"><h3>Danh sách studio</h3></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <select-picker :options=options titlePicker="Chọn thành phố "></select-picker>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-dark">
          <el-button type="danger" class="bt-report"><a href="http://localhost:8080/box">Xuất báo cáo rating</a></el-button>
          <el-button type="danger" class="bt-report"><a href="http://localhost:8080/box">Xuất báo cáo giá</a></el-button>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
import SelectPicker from './SelectPicker'
export default {
  name: 'header-content',
  components: { SelectPicker },
  data () {
    return {
      options: [
        { value: 'HN', label: 'Thêm studio ở Hà Nội', id: 1 },
        { value: 'HCM', label: 'Thêm studio ở HCM', id: 2 }
      ]
    }
  }
}
</script>
<style scope>
h3{
  font-weight: bold;
}
a{
  color: white;
}
a:hover{
  text-decoration-line: none;
  color: white;
}
.bt-report{
  color: white;
  font-weight: bold;
  background: #e82e81;
  background-color: #e82e81;
  border-color: #e82e81;
  outline: none;
}
.bt-report:hover{
  font-weight: bold;
  background: #e82e81;
  background-color: #e82e81;
  border-color: #e82e81;
}
</style>
