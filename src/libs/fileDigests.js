    /*******************\

  Made with opensource love
         by: owohai

    \*******************/
// Inspried by other internal 
// libs by the db-d org, on GitHub.

const fs = require("fs")
const crypto = require("crypto")

function fileDigest(file, fileStr) {
    var sum
     if(file === null) {  
        // not too sure about this one!
        sum = crypto.createHash('sha256').update(fileStr).digest("hex");
    } else if(file.typeof === "object"){
        sum = crypto.createHash('sha256').update(fs.readFileSync(file)).digest("hex");
    }
    return sum
  }

function compareDigests(json, verified) {
    // MAY BE VUNERABLE TO TIMING ATTACKS, SEE (!==) 
    if(json.compiled.sha256 !== verified) {
        return false
    } else {
        return true
    }
}

module.exports = { fileDigest, compareDigests }