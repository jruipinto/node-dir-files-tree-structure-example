const scanFolder = require('./scan-folder');

const path = './example-folder/';

(
  async () => {
    console.log(
      await scanFolder(path)
    );
  }
)();