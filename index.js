const dir = require('node-dir');

const path = './uploads';

// dir.files(path, (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });

dir.paths(path, (err, paths) => {
    if (err) throw err;
    console.log('files:\n', paths.files);
    console.log('subdirs:\n', paths.dirs);
});