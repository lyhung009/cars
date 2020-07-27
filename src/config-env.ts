import {writeFile} from 'fs';

require('dotenv').config();
const environment = process.env.ENVIRONMENT;
let apiURL;
if (environment === 'production') {
  apiURL = process.env.PRODUCTION_API_ENDPOINT;
}

console.log(environment, '  ', 'api: ', apiURL);

const targetPath = `./src/environments/environment.prod.ts`;
const envConfigFile = `
export const environment = {
  production: true, 
  apiUrl: '${apiURL}'};
  `;
writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.log(err);
  }
});
