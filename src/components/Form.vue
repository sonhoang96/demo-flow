<template>
  <el-form class="form" :inline="true">
    <el-form-item label="Name" size="small">
      <el-input v-model="name" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
          v-if="name !== ''"
          icon="el-icon-refresh"
          circle
          @click="clean"
      />
      <el-button
          icon="el-icon-plus"
          circle
          @click="sampleStore.addItem(name)"
      />
      <el-button
          v-if="selected.id !== null"
          icon="el-icon-edit"
          circle
          type="success"
          @click="sampleStore.updateItem({id: selected.id, name})"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import useForm from "./useForm";

export default {
  name: 'Form',
  setup() {
    const {selected, sampleStore, name, clean} = useForm()
    return {
      selected, sampleStore, name, clean
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 400px;
}
</style>
