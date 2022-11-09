const getValueFromTable = async (client, options) => {
    const { table, columns, limit } = options;
    const response = await client.execute(`SELECT ${columns} FROM ${table} LIMIT ${limit};`);
    return response.rows;
};

const getColumnsFromKeySpace = async (client, columns) => {
    const response = await client.execute(`SELECT ${columns} FROM system_schema.tables WHERE keyspace_name = '${client.keyspace}';`);
    return response.rows;
}

const getColumnsFromTable = async (client, columns, table) => {
    const response =
        await client.execute(`SELECT ${columns} FROM system_schema.tables WHERE table_name = ${table};`);
    return response.rows;
}

export { getColumnsFromKeySpace, getValueFromTable, getColumnsFromTable };
