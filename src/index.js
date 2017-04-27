const os = require('os')
const fs = require('fs')
const path = require('path')

const platform = `${os.platform()}-${os.arch()}`
const rootPath = getModuleRootPath()
const binPath = path.resolve(rootPath, 'src/platforms', platform, 'bin')
const packagePath = path.join(rootPath, 'package.json')
const { version } = require(packagePath)
const isPlatformSupported = isDirectory(binPath)
const bento4 = create()



module.exports = Object.freeze(bento4)

function create() {
  let bento4 = {
        version,
        platform,
        isPlatformSupported
      }

  if(bento4.isPlatformSupported) {
    bento4.binPath = binPath
    getExecutableFiles()
      .filter(file => !file.name.includes('Bento4'))
      .forEach((file) => {
        const executableName = removeFileExtension(file.name)
        bento4[executableName] = file.path
      })
  }

  return bento4
}

function removeFileExtension(filename) {
  const endIndex = filename.lastIndexOf('.')
  return endIndex === -1 ? filename : filename.lastIndexOf(endIndex)
}

function getExecutableFiles() {
  return fs.readdirSync(binPath)
          .filter(filename => fs.statSync(path.join(binPath, filename)).isFile())
          .map(filename => {
            return {
              name: filename,
              path: path.join(binPath, filename)
            }
          })
}

function getModuleRootPath() {
  // NPM 2
  let rootPath = path.resolve(__dirname, 'node_modules', 'bento4-installer')

  // NPM 3
  if(isDirectory(rootPath) === false) {
    rootPath = path.resolve(__dirname, '..')
  }

  return rootPath
}

function isFile(file) {
    try {
        const stats = fs.statSync(file)
        return stats.isFile()
    } catch (ignore) {
        return false
    }
}

function isDirectory(dirPath) {
  try {
    const stats = fs.statSync(dirPath)
    return stats.isDirectory()
  } catch(ignore) {
    return false
  }
}
