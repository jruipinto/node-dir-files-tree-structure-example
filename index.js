const scanFolder = require('./scan-folder');

const path = './uploads/';

(
  async () => {
    console.log(
      await scanFolder(path)
    );
  }
)();