import { createDataCenterSchema, createTableSchema } from './createSchema';
import { getType } from '../cassandraType/getType';

const getSchemaColumnData = (column, tableValues) => {
    const { name, type } = column;
    const columnValue = tableValues?.[name];
    const columType = getType(type, columnValue);
    return { ...column, ...columType };
};

const getSchema = async (client, DBMetadata) => {
    const tableSchemas = DBMetadata.map(createTableSchema);
    const dataCenterSchema = createDataCenterSchema(client.options.localDataCenter, tableSchemas);
    return dataCenterSchema;
};

export { getSchema, getSchemaColumnData };