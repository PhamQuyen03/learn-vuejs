<template>
  <el-table
    :data="tableData6"
    border
    stripe
    style="width: 100%">
    <el-table-column
      label="#"
      width="60">
    </el-table-column>
    <el-table-column
      prop="id"
      label="ID">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="Amount 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="Amount 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="Amount 3">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData6: [{
        id: '12987122',
        name: 'aom',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: 'hom',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: 'Tom',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: 'bom',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: 'kom',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  methods: {
  }
}
</script>
<style>
.el-table-column{
  text-align: left !important;
  color: red;
  background-color: red !important
}
th{
  background-color: #6e6e6e !important;
  color: #ffffff
}
</style>
