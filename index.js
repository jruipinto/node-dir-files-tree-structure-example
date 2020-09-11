const getDirTreeFrom = require('directory-tree'); // sync
const dirTree = require('directory-tree-promise'); // async

const path = './uploads';

// console.log('dir tree:', getDirTreeFrom(path, { normalizePath: true }));

(
    async => {
        console.log(
            await dirTree(path)
        );
    }
)();