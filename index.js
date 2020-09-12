const dirTree = require('./directory-tree-async');

const path = './uploads';

(
  async () => {
    console.log(
      await dirTree(path)
    );
  }
)();