import { convertType } from "./convertType";
import { checkIfIsComplex, checkIfIsJson } from "./checkType";

const getComplexType = (columnData, isComplex, isJson) => {
    const { type, value } = columnData;
    //if string check json
    //if complex check 
};

const getType = (type, value) => {
    const convertedType = convertType(type);
    const isComplex = checkIfIsComplex(type);
    const isJson = checkIfIsJson(value);

    if (!isComplex && !isJson) {
        return convertedType;
    }

    const columnData = { type, value };
    return getComplexType(columnData, isComplex, isJson);
}

export { getType };