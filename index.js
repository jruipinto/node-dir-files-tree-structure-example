const dir = require('node-dir');

const path = './uploads';

// dir.files(path, (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });

// dir.paths(path, (err, paths) => {
//     if (err) throw err;
//     console.log('files:\n', paths.files);
//     console.log('subdirs:\n', paths.dirs);
// });


const filesPromise = new Promise(
    (resolve, reject) => {
        dir.paths(path, (err, paths) => { err ? reject(err) : resolve(paths) });
    }
)
    .then(({ files, dirs }) => {
        return ({
            files: files.map(file => file.replace(/^[\w\d\s]*\\\\/g, '')),
            dirs: dirs.map(file => file.replace(/^[\w\d\s]*\\\\/g, ''))
        });
    })
    ;


(async () => {
    console.log(await filesPromise);
})()