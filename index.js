const getDirTreeFrom = require('directory-tree');

const path = './uploads';

console.log('dir tree:', getDirTreeFrom(path));