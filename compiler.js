var a = require("./src/libs/"), // internal library
    fs = require('fs')
    versioning = "prod",
    date = new Date().toUTCString(),
    prevCompliation = require("./src/compilations/[file].json"),
    newCompliation = require("./src/dev/compilations/[file].json"),
    path = `./src/compilations/compiled-${versioning}02.json`

fs.open(path, 'w', function (err) {if (err) console.error(err)})

newCompliation.compiled = {
    "at": date,
    "sha256": a.file.fileDigest(null, path)
}

var result = a.ext.merge(prevCompliation, newCompliation);

//console.log(a.file.fileDigest(null, path))
fs.writeFileSync(path, JSON.stringify(result, null, 4))