import { getColumnsFromTable, getTablesFromKeySpace, getFirstRowFromTable } from '../api/api';
import { mapTableNames, mapColumn } from '../../mappers/mappers';
import { validateTables } from '../validators/validateTables';
import { getSchemaColumnData } from '../schema/getSchema';

const getTableMetadata = async (client, table) => {
    const columns = await getColumnsFromTable(client, table);
    const mappedColumns = mapColumn(columns);
    const tableValues = await getFirstRowFromTable(client, table);
    const resultedColumns = mappedColumns.map((column) => getSchemaColumnData(column, tableValues));

    return { table, data: resultedColumns };
};

const getDBMetadata = async (client) => {
    const tables = await getTablesFromKeySpace(client);
    validateTables(tables);
    const tableNames = mapTableNames(tables);
    const tableMetadata = await Promise.all(tableNames.map(async name => await getTableMetadata(client, name)));
    return tableMetadata;
};

export { getDBMetadata }