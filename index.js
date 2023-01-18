const csvtojson = require("csvtojson")

const fs = require("fs")

const csvfilepath = "instruments.csv";

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json);

    fs.writeFileSync("output.js",JSON.stringify(json),"utf-8",(error) => {
        if(error){
            console.log(error);
        }
    })
})