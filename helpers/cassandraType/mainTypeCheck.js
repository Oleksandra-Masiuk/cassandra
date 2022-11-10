import {
    checkIfIsComplex,
    checkIfIsJson,
    checkIfObject
} from "./checkType";

const checkMainTypes = (type, value, convertedType) => {
    const isComplex = checkIfIsComplex(type);
    const isJsonParsed = checkIfIsJson(value);
    const isObject = checkIfObject(value, convertedType, type);
    const isSimpleType = !isComplex && !isJsonParsed && !isObject;

    return { isComplex, isJsonParsed, isObject, isSimpleType };
};

export { checkMainTypes };