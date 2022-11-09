import { CassandraConst, LIMIT } from "../../constants/cassandra";

const executeRequest = async (client, request) => {
    const response = await client.execute(request);
    return response.rows;
}

const getFirstRowFromTable = async (client, table) => {
    const request = `SELECT ${CassandraConst.ALL} FROM ${table} LIMIT ${LIMIT};`;
    return executeRequest(client, request);
};

const getTablesFromKeySpace = async (client) => {
    const request = `SELECT ${CassandraConst.TABLE_NAME} FROM ${CassandraConst.SYSTEM_TABLES} WHERE keyspace_name = '${client.keyspace}';`
    return executeRequest(client, request);
}

const getColumnsFromTable = async (client, table) => {
    const request = `SELECT ${CassandraConst.COLUMN_NAME}, ${CassandraConst.COLUMN_TYPE} FROM ${CassandraConst.SYSTEM_COLUMNS} WHERE table_name = '${table}' allow filtering;`;
    return executeRequest(client, request);
}

export { getTablesFromKeySpace, getFirstRowFromTable, getColumnsFromTable };
