'use strict'

const fs = require('fs')

const readme = fs.readFileSync('./README.md', 'utf8')

const snippet = require('./snippets/snippets-js.json')
const content = Object.entries(snippet)

const rows = content.map(([snippet, descriptor]) => {
  const keys = Array.isArray(descriptor.prefix) ? descriptor.prefix.join(', ') : descriptor.prefix
  return `${snippet}|${descriptor.description}|${keys}`
})

const toc = [
  '\nSnippet|Description|Type',
  '---|---|---'
]
  .concat(rows)
  .join('\n')

const regex = /(?<=<!-- ##TOC-BUILDER## -->)[\w\W]*(?=<!-- ##TOC-BUILDER-END## -->)/gm
const updated = readme.replace(regex, toc + '\n')

fs.writeFileSync('./README.md', updated)
