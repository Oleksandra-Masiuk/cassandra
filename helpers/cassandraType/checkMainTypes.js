import {
    checkIfComplex,
    checkIfJson,
    checkIfObject
} from "./checkType";

const checkMainTypes = (type, value, convertedType) => {
    const isComplex = checkIfComplex(type);
    const isJsonParsed = checkIfJson(value);
    const isObject = checkIfObject(value, convertedType, type);
    const isSimpleType = !isComplex && !isJsonParsed && !isObject;

    return { isComplex, isJsonParsed, isObject, isSimpleType };
};

export { checkMainTypes };