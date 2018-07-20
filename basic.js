let dir = require('node-dir'),
path = require('path'),
dir_walk = process.argv[2] || process.cwd();

// read all files in dir_walk recursively
dir.readFiles(dir_walk, function (err, content, fileName, next) {

    if (err) {

        // if error
        console.log(err);
        next();

    } else {

        // else we have the item
        console.log(fileName);
        console.log(content);

        next();

    }

});
