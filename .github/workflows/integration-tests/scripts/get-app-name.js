const fs = require('fs')

const argv = require('yargs/yargs')(process.argv.slice(2))
  .demandOption([ 'i' ])
  .alias('i', 'input')
  .argv

const samFile = argv.i
const sam = JSON.parse(fs.readFileSync(samFile, 'utf8'))

const resources = Object.values(sam.Resources)

const resourceWithAppName = resources.filter(resource => resource.Properties && resource.Properties.Environment && resource.Properties.Environment.Variables && Object.prototype.hasOwnProperty.call( resource.Properties.Environment.Variables, 'ARC_APP_NAME'))

const appName = resourceWithAppName[0].Properties.Environment.Variables['ARC_APP_NAME']

if (!appName) {
  throw new Error('App name not found')
}
else  {
  process.stdout.write(appName)
}
