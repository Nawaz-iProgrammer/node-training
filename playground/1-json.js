const fs = require('fs');

// const book = {
//   title: 'Agni Fire',
//   author: 'APJ',
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'edge';
data.age = 56;
fs.writeFileSync('1-json.json', JSON.stringify(data));

const demo = JSON.parse(fs.readFileSync('1-json.json').toString());

console.log(demo);
