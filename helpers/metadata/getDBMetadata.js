import { getColumnsFromTable, getTablesFromKeySpace, getFirstRowFromTable } from '../api/api';
import { mapTableNames, mapColumn } from '../../mappers/mappers';
import { validateTables } from '../validators/validateTables';

const getTableMetadata = async (client, table) => {
    const columns = await getColumnsFromTable(client, table);
    const mappedColumns = mapColumn(columns);
    const tableValues = await getFirstRowFromTable(client, table);
    return { table, columns: mappedColumns, values: tableValues };
};

const getDBMetadata = async (client) => {
    const tables = await getTablesFromKeySpace(client);
    validateTables(tables);
    const tableNames = mapTableNames(tables);
    const DBMetadata = await Promise.all(tableNames.map(async name => await getTableMetadata(client, name)));
    return DBMetadata;
};

export { getDBMetadata }