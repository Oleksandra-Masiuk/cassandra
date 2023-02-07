import fs from 'fs';
import path from 'path';

import { notify } from './notify';
import { pathToFile } from '../constants/pathToResultFile';

const writeToJsonFile = (content, successMessage) => {
    const contentStringified = JSON.stringify(content, null, 4);

    fs.writeFile(path.resolve(__dirname, pathToFile), contentStringified, (error) => {
        if (error) {
            notify(error);
        }
        notify(successMessage);
    });
};

export { writeToJsonFile };
