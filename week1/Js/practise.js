//reading a file 

const fs = require("fs");

    const contents = fs.readFileSync("./a.txt","utf-8");
    const content = fs.readFileSync("./b.txt","utf-8");
    
    console.log(contents+content);

    