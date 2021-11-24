<template>
  <div class="table">
    <el-table
        :data="data"
    >
      <el-table-column
          v-for="col in cols"
          :key="col.id"
          :prop="col.prop"
          :label="col.label"
          :width="col.width"
      >
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <slot name="actions" :item="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import useTable from './useTable'

export default {
  name: 'Table',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const {cols} = useTable()
    return {cols}
  },
}
</script>

<style lang="scss" scoped>
.table {
}
</style>
