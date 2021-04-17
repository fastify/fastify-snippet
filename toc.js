'use strict'

const fs = require('fs')

const readme = fs.readFileSync('./README.md', 'utf8')

const snippet = JSON.parse(fs.readFileSync('./.vscode/fastify-snippet.code-snippets'))
const content = Object.entries(snippet)

const rows = content.map(([snippet, descriptor]) => {
  const keys = Array.isArray(descriptor.prefix) ? descriptor.prefix.join(', ') : descriptor.prefix
  return `${snippet}|${descriptor.description}|${keys}`
})

const toc = [
  'Snippet|Description|Type',
  '---|---|---'
]
  .concat(rows)
  .join('\n')

const regex = /(?<=<!-- ##TOC-BUILDER## -->)[\w\W]*(?=<!-- ##TOC-BUILDER-END## -->)/gm
const updated = readme.replace(regex, toc)

fs.writeFileSync('./README.md', updated)
