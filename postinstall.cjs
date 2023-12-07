const fs = require('node:fs')
const path = require('node:path')

const PATHS_TO_REMOVE = [
    'node_modules/gatsby/node_modules/@parcel',
    'node_modules/gatsby-parcel-config/node_modules/@parcel',
    'node_modules/@gatsbyjs/parcel-namer-relative-to-cwd/node_modules/@parcel',
]

for (const p of PATHS_TO_REMOVE) {
    console.log('[postinstall] rm', p)
    fs.rmSync(path.join(__dirname, ...p.split('/')), { recursive: true, force: true })
}
