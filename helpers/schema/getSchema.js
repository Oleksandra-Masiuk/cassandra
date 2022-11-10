import { getColumnsFromTable, getTablesFromKeySpace, getFirstRowFromTable } from '../api/api';
import { mapTableNames, mapColumn } from '../../mappers/mappers';
import { createDataCenterSchema, createTableSchema } from './createSchema';
import { getType } from '../cassandraType/getType';
import { validateTables } from '../validators/validateTables';

const getSchemaColumnData = (column, tableValues) => {
    const { name, type } = column;
    const columnValue = tableValues?.[name];
    const columType = getType(type, columnValue);
    return { ...column, ...columType };
};

const getSchemaTableData = async (client, table) => {
    const columns = await getColumnsFromTable(client, table);
    const mappedColumns = mapColumn(columns);
    const tableValues = await getFirstRowFromTable(client, table);
    const resultedColumns = mappedColumns.map((column)=>getSchemaColumnData(column, tableValues));

    return { table, data: resultedColumns };
};

export const getSchema = async (client) => {
    const tables = await getTablesFromKeySpace(client);
    
    validateTables(tables);

    const tableNames = mapTableNames(tables);
    const tableSchemaData = await Promise.all(tableNames.map(async name => await getSchemaTableData(client, name)));
    const tableSchemas = tableSchemaData.map(createTableSchema);
    const dataCenterSchema = createDataCenterSchema(client.options.localDataCenter, tableSchemas);

    return dataCenterSchema;
};
