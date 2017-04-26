const os = require('os')
const fs = require('fs')
const path = require('path')
const bento4 = require('./index.js')

describe('index', function () {
  it('should spit out the os version', () => {
    const platform = os.platform() + '-' + os.arch()
    console.log('/===>bento4=', bento4);
  })
})
