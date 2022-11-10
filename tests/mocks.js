import { getSchemaColumnData } from '../helpers/schema/getSchema';
import { mapTableNames, mapColumn } from '../mappers/mappers';
import { createDataCenterSchema, createTableSchema } from '../helpers/schema/createSchema';
import { validateTables } from '../helpers/validators/validateTables';

import { ALL_TABLES_DATA } from './mockData';
import { DATACENTER } from './constants';

const getColumnsFromTable = (table) => {
    const tableData = ALL_TABLES_DATA.find(data=>data.name===table);
    return tableData?.columns;
};

const getFirstRowFromTable = (table) => {
    const tableData = ALL_TABLES_DATA.find(data=>data.name===table);
    return tableData?.firstRow;
}

const getSchemaTableData = (table) => {
    const columns = getColumnsFromTable(table);
    const mappedColumns = mapColumn(columns);
    const tableValues = getFirstRowFromTable(table);
    const resultedColumns = mappedColumns.map((column) => getSchemaColumnData(column, tableValues));

    return { table, data: resultedColumns };
};

const getSchema = (tables) => {
    validateTables(tables);
    const tableNames = mapTableNames(tables);
    const tableSchemaData = tableNames.map( name => getSchemaTableData(name));
    const tableSchemas = tableSchemaData.map(createTableSchema);
    const dataCenterSchema = createDataCenterSchema(DATACENTER, tableSchemas);

    return dataCenterSchema;
};

export { getSchema };