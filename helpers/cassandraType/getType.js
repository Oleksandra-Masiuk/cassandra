import { convertType } from "./convertType";
import { checkIfNull, checkIfDate, checkIfNumber, checkIfIsComplex, checkIfIsJson, checkIfObject } from "./checkType";
import { JSONSchemaType } from "../../constants/JSONSchemaType";

const getApproximateType = (value) => {
    const isNull = checkIfNull(value);

    if (isNull) {
        return JSONSchemaType.NULL;
    }

    const isNumber = checkIfNumber(value);

    if (isNumber) {
        return JSONSchemaType.NUMBER;
    }

    const isDate = checkIfDate(value);

    if (isDate) {
        return JSONSchemaType.STRING;
    }

    return typeof value;
};

const getObjectType = (jsonParsed) => {
    const properties = [];
    Object.entries(jsonParsed).forEach(([name, value]) => {
        const approximateType = getApproximateType(value);
        properties.push({ name, ...getType(approximateType, value) });
    });

    return { type: 'object', properties }
};

const getComplexType = (columnData, isComplex, isJsonParsed, isObject) => {
    const { type, value } = columnData;
    if (isJsonParsed || isObject) {
        return getObjectType(isObject ? value : JSON.parse(value));
    }
    //if complex check 
};

const getType = (type, value) => {
    const convertedType = convertType(type);
    const isComplex = checkIfIsComplex(type);
    const isJsonParsed = checkIfIsJson(value);
    const isObject = checkIfObject(value, convertedType);
    const isSimpleType = !isComplex && !isJsonParsed && !isObject;

    if (isSimpleType) {
        return { type: convertedType };
    }

    const columnData = { type, value };
    return getComplexType(columnData, isComplex, isJsonParsed, isObject);
}

export { getType };