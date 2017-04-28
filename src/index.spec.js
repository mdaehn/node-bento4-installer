const os = require('os')
const fs = require('fs')
const path = require('path')
const bento4 = require('./index.js')
const equal = require('assert').deepEqual

describe('bento4-installer', function () {
  const platform = os.platform() + '-' + os.arch()
  it(`should set the platform to ${platform}`, () => {
    equal(bento4.platform, platform)
  })
  it(`should support the platorm ${platform}`, () => {
    equal(bento4.isPlatformSupported, true)
  })

})



const expectedBento4ObjectKeys = [
  'version',
  'platform',
  'isPlatformSupported',
  'binPath',
  'aac2mp4',
  'mp42aac',
  'mp42avc',
  'mp42hevc',
  'mp42hls',
  'mp42ts',
  'mp4compact',
  'mp4dash',
  'mp4dashclone',
  'mp4dcfpackager',
  'mp4decrypt',
  'mp4dump',
  'mp4edit',
  'mp4encrypt',
  'mp4extract',
  'mp4fragment',
  'mp4hls',
  'mp4info',
  'mp4mux',
  'mp4rtphintinfo',
  'mp4split',
  'mp4tag'
]
