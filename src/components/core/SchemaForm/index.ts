export * from './types/form';
export * from './types/formItem';

// export { default as SchemaForm } from './SchemaForm.vue'
import SchemaForm from './SchemaForm.vue';

export { SchemaForm };

export type SchemaFormRef = InstanceType<typeof SchemaForm>;
