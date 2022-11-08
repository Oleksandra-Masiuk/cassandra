import {
    initDatabase
} from './app'

const init = () => {
    try {
        const client = initDatabase();
        client.connect().then(function () {
            console.log('Connected to cluster');
        });
    }
    catch (error) {
        console.log('Cannot connect to database');
    }
}

init();