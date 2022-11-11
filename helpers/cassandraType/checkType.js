import { CassandraComplexTypes, CassandraPrimitiveTypes } from "../../constants/cassandraTypes";
import { JSONSchemaType } from "../../constants/JSONSchemaType";

const checkIfComplex = (type) => Object.values(CassandraComplexTypes).some(cstype => cstype === type);

const checkIfNull = (value) => { value === null };

const checkIfNumber = (value) => !isNaN(value);

const checkIfDate = (value) => Date.parse(value);

const checkIfUUID = (type) => type === CassandraPrimitiveTypes.UUID;

const checkIfObject = (value, convertedType, type) => {
    const isTypeObject = typeof value === 'object';
    const isArray = checkIfArrayType(convertedType, value);
    const isUUID = checkIfUUID(type);
    return (isTypeObject && value !== null && !isUUID) || isArray;
}

const checkIfJson = (value) => {
    try {
        const parsed = JSON.parse(value);
        return !checkIfNumber(parsed);
    }
    catch {
        return null;
    }
};

const checkIfArrayType = (type, value) => (
    type.includes(CassandraComplexTypes.LIST) ||
    type.includes(CassandraComplexTypes.MAP) ||
    type.includes(CassandraComplexTypes.SET) ||
    type.includes(CassandraComplexTypes.TUPLE) ||
    Array.isArray(value)
);

const checkIfTuple = (type) => type.includes(CassandraComplexTypes.TUPLE)

const checkIfMap = type => type !== CassandraComplexTypes.MAP;

const checkIfJsonArray = type => type === JSONSchemaType.ARRAY;

export { checkIfComplex, checkIfJson, checkIfNull, checkIfDate, checkIfNumber, checkIfObject, checkIfArrayType, checkIfMap, checkIfJsonArray, checkIfTuple };