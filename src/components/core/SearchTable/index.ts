import { Ref } from 'vue';
import DynamicTable from './SearchTable.vue';
import TableQueryHeader from './components/query-form/index.vue';
export { DynamicTable, TableQueryHeader };

export type { LoadDataParams, TableColumn } from './typing';

export type DynamicTableInstance = InstanceType<typeof DynamicTable>;

export type DynamicTableRef = Ref<DynamicTableInstance>;
