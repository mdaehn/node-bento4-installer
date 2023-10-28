const {
  removeFileExtension,
  getExecutableFiles,
  isDirectory,
  binPath,
  packageJson,
  platform
} = require('./util')

const { version } = packageJson
const isPlatformSupported = isDirectory(binPath)
const bento4 = create()

module.exports = Object.freeze(bento4)

function create() {
  let bento4 = {
    version,
    platform,
    isPlatformSupported
  }

  if (bento4.isPlatformSupported) {
    bento4.binPath = binPath
    getExecutableFiles().filter(file => !file.name.includes('Bento4')).forEach(file => {
      const executableName = removeFileExtension(file.name)
      bento4[executableName] = file.path
    })
  }

  return bento4
}
