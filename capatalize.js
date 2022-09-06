const fs = require("fs");

fs.readFile('./content.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
        let capitalwords = data.toUpperCase();
        fs.writeFile("./capitalize.txt", capitalwords,{ encoding: 'utf-8' },(err) => {
            console.log("file has been saved")
        })
    }
});