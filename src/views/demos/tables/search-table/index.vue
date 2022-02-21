<template>
  <TopBar>
    <ATabs name="tabbar">
      <ATabPane key="1" tab="Tab 1" />
      <ATabPane key="2" tab="Tab 2" force-render />
      <ATabPane key="3" tab="Tab 3" />
    </ATabs>
  </TopBar>

  <BaseContainer>
    <SearchTable
      ref="dynamicTableRef"
      size="small"
      bordered
      :data-request="loadData"
      :columns="columns"
      :hideInQuery="hideInQuery"
      rowKey="heroid"
      @toggle-advanced="toggleAdvanced"
    />
  </BaseContainer>
</template>

<script lang="ts" setup>
  import { columns, tableData } from './columns';

  const loadData = async (params) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          list: tableData,
          ...params,
        });
      }, 500);
    });
  };
  const hideInQuery = ['time'];
</script>

<style lang="less" scoped></style>
