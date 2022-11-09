const createTableSchema = ({ table, data }) => {
    const properties = data.reduce((prev, next) => {
        return {
            ...prev,
            [next.name]: { type: next.type }
        }
    }, {});
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