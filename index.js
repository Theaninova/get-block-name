const core = require('@actions/core')
const fs = require('fs')


const path = core.getInput('cmake-path')
fs.readFile(path, 'utf8', (err, data) => {
  if (err) core.setFailed(err.message)

  const out = data.match(/set\s*\(\s*BLOCK\s+(\w+)\s*\)/i).groups[0]
  if (out) core.setOutput('block-name', out) else core.setFailed('no match')
})
