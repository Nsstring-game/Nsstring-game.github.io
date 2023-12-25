const fs = require('fs');

let output = fs.readFileSync('./template0405.txt', 'utf-8');
const dataJson = fs.readFileSync('Nprofile0506.json');
const data = JSON.parse(dataJson);

for (let key in data ) {
    const regex = new RegExp(`\\$\\{vcard.${key}\\}`,'g');
    output = output.replace(regex, data[key]);
}

console.log(output);