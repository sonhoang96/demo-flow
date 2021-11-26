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
          @click="handleAddItem(name)"
      />
      <el-button
          v-if="selected.id !== null"
          icon="el-icon-edit"
          circle
          type="success"
          @click="handleUpdateItem({id: selected.id, name})"
      />
      <span v-if="loading">Loading</span>
    </el-form-item>
  </el-form>
</template>

<script>
import useForm from "./useForm";

export default {
  name: 'Form',
  props:{
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {...useForm()}
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
}
</style>
