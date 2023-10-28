const equal = require('assert').deepEqual
const { removeFileExtension } = require('./util')

describe('util', function() {
  describe('removeFileExtension()', function() {
    it('should remove the .exe from filename', function() {
      const filename = 'a.file.name.exe'
      const expected = 'a.file.name'
      const actual = removeFileExtension(filename)
      equal(actual, expected)
    })
    it('should not modify the file name', function() {
      const filename = 'afilename'
      const expected = filename
      const actual = removeFileExtension(filename)
      equal(actual, expected)
    })
  })
})
