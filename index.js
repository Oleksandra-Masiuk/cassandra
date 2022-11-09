import {
    initDatabase
} from './initDatabase'
import { config } from './config';
import { validateConfig } from './helpers/validateConfig';
import { Error } from './constants/errors';
import { CONNECTED } from './constants/approval';
import { getSchema } from './helpers/getSchema';
import { writeToJsonFile } from './helpers/writeToFile';
import { notify } from './helpers/notify';

const init = async () => {
    if (!validateConfig(config)) {
        return notify(Error.INVALID_CONFIG);
    }
    try {
        const client = await initDatabase(config);
        notify(CONNECTED);
        const schema = await getSchema(client);
        writeToJsonFile(schema);
    }
    catch (error) {
        notify(error ?? Error.CANNOT_CONNECT);
    }
}

init();