const fs = require('fs');
const fileName = '../data/motor.json';
    
function writeJson(file){
    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });
}

module.exports = writeJson;