import { checkIfJsonArray, checkIfTuple } from "../cassandraType/checkType";

const getItems = (data) => {
    if (!checkIfJsonArray(data.type)) {
        return {};
    }
    
    return {
        items: {
            type: data.items.type
        }
    };
};

const getPrefixItems = (data) => {
    if (!data.prefixItems) {
        return {};
    }
    return {
        prefixItems: data.prefixItems
    };
};

const getProperties = data => data.reduce((prev, next) => {
    const items = next?.items ? getItems(next): getPrefixItems(next);
    if (!next.properties) {
        return {
            ...prev,
            [next.name]: {
                type: next.type,
                ...items
            },
        }
    }

    return {
        ...prev,
        [next.name]: {
            type: next.type,
            properties: getProperties(next.properties),
            ...items
        }
    }
}, {});

const createTableSchema = ({ table, data }) => {
    const properties = getProperties(data);
    return {
        title: table,
        type: 'object',
        properties
    };
};

const createDataCenterSchema = (dataCenterName, data) => {
    const properties = data.reduce((prev, next) => {
        return {
            ...prev,
            [next.title]: next
        }
    }, {});

    return {
        title: dataCenterName,
        type: 'object',
        '$schema': "https://json-schema.org/draft/2020-12/schema",
        properties
    };
};

export { createDataCenterSchema, createTableSchema };
