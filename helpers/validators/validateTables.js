const validateTables = tables => {
    if (!tables?.length) {
        throw Error('There are no tables in database')
    }
};

export { validateTables };