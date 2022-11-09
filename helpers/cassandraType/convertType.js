import { CassandraPrimitiveTypes } from "../../constants/cassandraTypes";
import { JSONSchemaType } from '../../constants/JSONSchemaType';

const convertType = (type) => {
    switch (type) {
        case CassandraPrimitiveTypes.BOOLEAN:
            return JSONSchemaType.BOOLEAN;

        case CassandraPrimitiveTypes.BIGINT:
        case CassandraPrimitiveTypes.COUNTER:
        case CassandraPrimitiveTypes.DECIMAL:
        case CassandraPrimitiveTypes.DOUBLE:
        case CassandraPrimitiveTypes.FLOAT:
        case CassandraPrimitiveTypes.INT:
        case CassandraPrimitiveTypes.SMALLINT:
        case CassandraPrimitiveTypes.TINYINT:
        case CassandraPrimitiveTypes.VARINT:
            return JSONSchemaType.NUMBER;

        case CassandraPrimitiveTypes.DATE:
        case CassandraPrimitiveTypes.TIME:
        case CassandraPrimitiveTypes.TIMESTAMP:
        case CassandraPrimitiveTypes.BLOB:
        case CassandraPrimitiveTypes.DURATION:
        case CassandraPrimitiveTypes.INET:
        case CassandraPrimitiveTypes.UUID:
        case CassandraPrimitiveTypes.TIMEUUID:
        case CassandraPrimitiveTypes.ASCII:
        case CassandraPrimitiveTypes.TEXT:
        case CassandraPrimitiveTypes.VARCHAR:
            return JSONSchemaType.STRING;

        default:
            return type;
    }
}

export { convertType };