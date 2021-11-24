<template>
  <div class="sample">
    <h2>Sample Page</h2>
    <!--Form-->
    <Form/>
    <!--Table-->
    <Table :data="listItems">
      <!--delete and edit button-->
      <template v-slot:actions="slotProps">
        <el-button circle icon="el-icon-delete" @click="sampleStore.deleteItem(slotProps.item.id)"></el-button>
        <el-button circle icon="el-icon-edit" @click="sampleStore.selectItem(slotProps.item)"></el-button>
      </template>
    </Table>
  </div>
</template>

<script>
import Form from '../../components/Form'
import Table from '../../components/Table'
// Gọi tới file xử lí chức năng của component này 
import useHook from "./hook";

export default {
  name: 'Sample',
  components: {
    Form,
    Table
  },
  //Hàm setup chạy trước khi component được khởi tạo
  setup() {
    const {listItems, sampleStore} = useHook()
    return {listItems, sampleStore}
  }
}
</script>

<style lang="scss" scoped>
.sample {
}
</style>
