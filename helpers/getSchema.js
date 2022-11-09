import { config } from '../config';
import { CassandraConstants } from '../constants/cassandra';
import { getColumnsFromKeySpace } from './api';

export const getSchema = async (client) => {
    const allTables = await getColumnsFromKeySpace(client, CassandraConstants.TABLE_NAME);

    console.log(allTables);
    return {};
};
