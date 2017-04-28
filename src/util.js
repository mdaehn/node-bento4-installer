const fs = require('fs')
const path = require('path')
const os = require('os')

const rootPath = getModuleRootPath()
const platform = `${os.platform()}-${os.arch()}`
const binPath = path.resolve(rootPath, 'src/platforms', platform, 'bin')
const packagePath = path.join(rootPath, 'package.json')
const packageJson = require(packagePath)

module.exports = {
  removeFileExtension,
  getExecutableFiles,
  getModuleRootPath,
  getModuleRootPath,
  isFile,
  isDirectory,
  binPath,
  rootPath,
  packagePath,
  packageJson,
  platform
}




function removeFileExtension(filename) {
  const endIndex = filename.lastIndexOf('.')
  return endIndex === -1 ? filename : filename.slice(0, endIndex)
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
