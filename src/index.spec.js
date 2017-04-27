const os = require('os')
const fs = require('fs')
const path = require('path')
const bento4 = require('./index.js')
const equal = require('assert').deepEqual

describe('index', function () {
  const platform = os.platform() + '-' + os.arch()
  it(`should set the platform to ${platform}`, () => {
    console.log('/===>bento4=', Object.keys(bento4))
    equal(bento4.platform, platform)
  })
})
