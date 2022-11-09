import { CassandraComplexTypes } from "../../constants/cassandraTypes";

const checkIfIsComplex = (type) => Object.values(CassandraComplexTypes).some(cstype => cstype === type);

const checkIfIsJson = (value) => {
    try {
        return JSON.parse(value);
    }
    catch {
        return false;
    }
};

export { checkIfIsComplex, checkIfIsJson };