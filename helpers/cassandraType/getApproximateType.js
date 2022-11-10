import {
    checkIfNull,
    checkIfDate,
    checkIfNumber
} from "./checkType";
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

export { getApproximateType };