const core = require('@actions/core')
const fs = require('fs')
const path = require("path")


const cmake_path = path.resolve(/*core.getInput('cmake-path')*/'CMakeLists.txt')
fs.readFile(cmake_path, 'utf8', (err, data) => {
  if (err) {
    core.setFailed(err.message)
    return
  }

  const out = data.match(/set\s*\(\s*BLOCK\s+(\w+)\s*\)/i)[1]
  if (out) {
    core.setOutput('block-name', out)
  } else {
    core.setFailed('no match')
  }
})
