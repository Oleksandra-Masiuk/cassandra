import { CassandraComplexTypes, CassandraPrimitiveTypes } from "../../constants/cassandraTypes";

const checkIfIsComplex = (type) => Object.values(CassandraComplexTypes).some(cstype => cstype === type);

const checkIfNull = (value) => { value === null };

const checkIfNumber = (value) => !isNaN(value);

const checkIfDate = (value) => Date.parse(value);

const checkIfObject = (value, type) => typeof value === 'object' && value !== null && type === CassandraPrimitiveTypes.STRING;

const checkIfIsJson = (value) => {
    try {
        const parsed = JSON.parse(value);
        return !checkIfNumber(parsed);
    }
    catch {
        return null;
    }
};

export { checkIfIsComplex, checkIfIsJson, checkIfNull, checkIfDate, checkIfNumber, checkIfObject };