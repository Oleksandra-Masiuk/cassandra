import { getColumnsFromTable, getTablesFromKeySpace, getFirstRowFromTable } from '../api/api';
import { mapTableNames, mapColumn } from '../../mappers/mappers';
import { createDataCenterSchema, createTableSchema } from './createSchema';
import { getType } from '../cassandraType/getType';
import { validateTables } from '../validators/validateTables';

const getTableDataForSchemas = async (client, table) => {
    const columns = await getColumnsFromTable(client, table);
    const mappedColumns = mapColumn(columns);
    const tableValues = await getFirstRowFromTable(client, table);

    let resultedColumns = [];

    mappedColumns.forEach((column) => {
        const columType = getType(column.type, tableValues?.[0]?.[column.name]);
        resultedColumns.push({ ...column, ...columType });
    });

    return { table, data: resultedColumns };
};

export const getSchema = async (client) => {
    const allTables = await getTablesFromKeySpace(client);
    validateTables(allTables);
    
    const allTableNames = mapTableNames(allTables);

    const tableDataForSchemas = await Promise.all(allTableNames.map(async table => await getTableDataForSchemas(client, table)));

    const tableSchemas = tableDataForSchemas.map(createTableSchema);

    const dataCenterSchema = createDataCenterSchema(client.options.localDataCenter, tableSchemas);
    return dataCenterSchema;
};
