import {
    initDatabase
} from './app'
import { config } from './config';
import { validateConfig } from './helpers/validateConfig';
import { CANNOT_CONNECT, INVALID_CONFIG } from './constants/errors';
import { CONNECTED } from './constants/approval';

const init = () => {
    if (!validateConfig(config)) {
        return console.log(INVALID_CONFIG);
    }
    try {
        const client = initDatabase(config);
        client.connect().then(function () {
            console.log(CONNECTED);
        });
    }
    catch (error) {
        console.log(CANNOT_CONNECT);
    }
}

init();