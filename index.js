import {
    initDatabase
} from './initDatabase'
import { config } from './config';
import { validateConfig } from './helpers/validators/validateConfig';
import { Notification } from './constants/notifications';
import { getSchema } from './helpers/schema/getSchema';
import { writeToJsonFile } from './helpers/writeToFile';
import { notify } from './helpers/notify';
import { getDBMetadata } from './helpers/metadata/getDBMetadata';

const init = async () => {
    if (!validateConfig(config)) {
        return notify(Notification.INVALID_CONFIG);
    }
    try {
        const client = await initDatabase(config);
        notify(Notification.CONNECTED);
        const DBMetadata = await getDBMetadata(client);
        const schema = await getSchema(client, DBMetadata);
        writeToJsonFile(schema, Notification.SUCCESSFULLY_WRITTEN_TO_FILE);
    }
    catch (error) {
        notify(error.message ?? Notification.CANNOT_CONNECT);
    }
}

init();