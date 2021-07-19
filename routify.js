const fs = require('fs')
const { generateRoutes } = require('vue-route-generator')
const chokidar = require('chokidar');

const perintah = () => fs.writeFileSync('./src/routes.js', generateRoutes({
  pages: './src/pages',
  importPrefix: '/src/pages/'
}))

if (process.argv[2] == '-w') {
  const watcher = chokidar.watch('./src/pages')
  watcher.on('add', () => perintah())
  watcher.on('unlink', () => perintah())
} else {
  perintah()
}