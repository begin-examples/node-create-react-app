const argv = require('yargs/yargs')(process.argv.slice(2))
  .demandOption([ 'a', 'u' ])
  .alias('a', 'app-name')
  .alias('u', 'unique-stack')
  .argv


function toPascalCase (text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper (text) {
  return text.replace(/-/, '').toUpperCase()
}

const fullStackName = toPascalCase([ argv.a, 'staging', argv.u ].join('-'))


process.stdout.write(fullStackName)
