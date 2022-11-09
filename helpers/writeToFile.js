import fs from 'fs';
import path from 'path';
import { pathToFile } from '../constants/pathToResultFile';
import { notify } from './notify';

const writeToJsonFile = (content) => {
    fs.writeFileSync(path.resolve(__dirname, pathToFile), content, (error) => notify(error));
};

export { writeToJsonFile };
