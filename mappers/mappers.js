import { CassandraConst } from "../constants/cassandra";

const mapTableNames = (tables = []) => tables?.map(table => table[CassandraConst.TABLE_NAME]);

const mapColumn = (columns = []) => columns?.map(column => ({
    name: column[CassandraConst.COLUMN_NAME],
    type: column[CassandraConst.COLUMN_TYPE]
}));

export { mapTableNames, mapColumn };