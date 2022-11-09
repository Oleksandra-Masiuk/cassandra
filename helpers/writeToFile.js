import fs from 'fs';
import path from 'path';
import { pathToFile } from '../constants/pathToResultFile';
import { notify } from './notify';

const writeToJsonFile = (content) => {
    const contentStringified = JSON.stringify(content, null, 4);
    fs.writeFileSync(path.resolve(__dirname, pathToFile), contentStringified, (error) => notify(error));
};

export { writeToJsonFile };
