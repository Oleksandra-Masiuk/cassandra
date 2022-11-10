import {
    initDatabase
} from './initDatabase'
import { config } from './config';
import { validateConfig } from './helpers/validators/validateConfig';
import { Notification } from './constants/notifications';
import { getSchema } from './helpers/schema/getSchema';
import { writeToJsonFile } from './helpers/writeToFile';
import { notify } from './helpers/notify';

const init = async () => {
    if (!validateConfig(config)) {
        return notify(Notification.INVALID_CONFIG);
    }
    try {
        const client = await initDatabase(config);
        notify(Notification.CONNECTED);
        const schema = await getSchema(client);
        writeToJsonFile(schema);
        notify(Notification.SUCCESSFULLY_WRITTEN_TO_FILE);
    }
    catch (error) {
        notify(error?.message ?? Notification.CANNOT_CONNECT);
    }
}

init();