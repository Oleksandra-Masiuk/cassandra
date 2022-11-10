import { CassandraComplexTypes, CassandraPrimitiveTypes } from "../../constants/cassandraTypes";
import { JSONSchemaType } from "../../constants/JSONSchemaType";

const checkIfIsComplex = (type) => Object.values(CassandraComplexTypes).some(cstype => cstype === type);

const checkIfNull = (value) => { value === null };

const checkIfNumber = (value) => !isNaN(value);

const checkIfDate = (value) => Date.parse(value);

const checkIfObject = (value, type) => {
    const isTypeObject = typeof value === 'object';
    const isArray = checkIfArrayType(type, value);
    return (isTypeObject && value !== null && type === CassandraPrimitiveTypes.STRING) || isArray;
}

const checkIfIsJson = (value) => {
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

export { checkIfIsComplex, checkIfIsJson, checkIfNull, checkIfDate, checkIfNumber, checkIfObject, checkIfArrayType, checkIfMap, checkIfJsonArray, checkIfTuple };