import { getColumnsFromTable, getTablesFromKeySpace } from './api';
import { mapTableNames, mapColumnNames } from '../mappers/mappers';

export const getSchema = async (client) => {
    const allTables = await getTablesFromKeySpace(client);
    const allTableNames = mapTableNames(allTables);

    const result = await Promise.all(allTableNames.map(async table => {
        const columns = await getColumnsFromTable(client, table);
        const columnNames = mapColumnNames(columns);
        return columnNames;
    }))
    return result;
};
