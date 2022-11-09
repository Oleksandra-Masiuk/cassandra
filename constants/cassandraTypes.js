const CassandraPrimitiveTypes = {
    ASCII: 'ascii',
    BIGINT: 'bigint',
    BLOB: 'blob',
    BOOLEAN: 'boolean',
    COUNTER: 'counter',
    DATE: 'date',
    DECIMAL: 'decimal',
    DOUBLE: 'double',
    DURATION: 'duration',
    FLOAT: 'float',
    INET: 'inet',
    INT: 'int',
    SMALLINT: 'smallint',
    TEXT: 'text',
    TIME: 'time',
    TIMESTAMP: 'timestamp',
    TIMEUUID: 'timeuuid',
    TINYINT: 'tinyint',
    UUID: 'uuid',
    VARCHAR: 'varchar',
    VARINT: 'varint'
};

const CassandraComplexTypes = {
    MAP: 'map',
    SET: 'set',
    LIST: 'list',
    TUPLE: 'tuple',
    UDT: 'UDT10'
};

export { CassandraComplexTypes, CassandraPrimitiveTypes };