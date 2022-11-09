import { getColumnsFromTable, getTablesFromKeySpace } from './api';
import { mapTableNames, mapColumn } from '../mappers/mappers';
import { createDataCenterSchema, createTableSchema } from './createSchema';

export const getSchema = async (client) => {
    const allTables = await getTablesFromKeySpace(client);
    const allTableNames = mapTableNames(allTables);

    const tableDataForSchemas = await Promise.all(allTableNames.map(async table => {
        const columns = await getColumnsFromTable(client, table);
        const columnData = mapColumn(columns);
        return {table, data: columnData};
    }));

    const tableSchemas = tableDataForSchemas.map(createTableSchema);

    const dataCenterSchema = createDataCenterSchema(client.options.localDataCenter, tableSchemas);
    return dataCenterSchema;
};
