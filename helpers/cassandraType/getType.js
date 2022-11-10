import { convertType } from "./convertType";
import {
    checkIfArrayType,
    checkIfMap,
    checkIfTuple
} from "./checkType";
import { getApproximateType } from "./getApproximateType";
import { JSONSchemaType } from "../../constants/JSONSchemaType";
import { checkMainTypes } from "./mainTypeCheck";


const getObjectType = (jsonParsed) => {
    const properties = [];
    Object.entries(jsonParsed).forEach(([name, value]) => {
        const approximateType = getApproximateType(value);
        properties.push({ name, ...getType(approximateType, value) });
    });

    return { type: JSONSchemaType.OBJECT, properties }
};

const getTupleType = (value) => {
    const [firstValue, secondValue] = value.elements;
    return ({
        type: JSONSchemaType.ARRAY,
        prefixItems: [
            getType(typeof firstValue, firstValue),
            getType(typeof secondValue, secondValue)
        ]
    })
};

const getArrayType = (value, type) => {
    if (checkIfTuple(type)) {
        return getTupleType(value);
    }
    const firstValue = checkIfMap(type) ? Object.values(value)?.[0] : value?.[0];
    return {
        type: JSONSchemaType.ARRAY,
        items: getType(typeof firstValue, firstValue)
    };
}

const getComplexType = (columnData) => {
    const { type, value, isComplex, isJsonParsed, isObject } = columnData;
    const isArray = checkIfArrayType(type, value);
    const isObjectOrJson = (isJsonParsed || isObject) && !isArray;
    if (isObjectOrJson) {
        return getObjectType(isObject ? value : JSON.parse(value));
    }

    if (isArray) {
        const arr = getArrayType(value, type);
        return arr;
    }

};

const getType = (type, value) => {
    const convertedType = convertType(type);
    const { isComplex, isJsonParsed, isObject, isSimpleType } = checkMainTypes(type, value, convertedType);

    if (isSimpleType) {
        return { type: convertedType };
    }

    const columnData = { type, value, isComplex, isJsonParsed, isObject };
    return getComplexType(columnData);
}

export { getType };