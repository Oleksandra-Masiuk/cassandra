import { NO_TABLES_IN_DATABASE } from '../../constants/notifications';

const validateTables = tables => {
    if (!tables?.length) {
        throw Error(NO_TABLES_IN_DATABASE)
    }
};

export { validateTables };