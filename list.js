const fs = require("fs");

fs.readFile('./content.txt',{encoding:'utf-8'} ,(err,data) => {
  if (err){
    console.log(err);
  }
  else{
      console.log(data);
  }
});