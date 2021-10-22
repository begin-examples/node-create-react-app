const fs = require('fs')
// Read from stdin
const stackInfoFile = fs.readFileSync(0, 'utf-8')

const stackInfo = JSON.parse(stackInfoFile)

const outputs = stackInfo.Stacks[0].Outputs


let url = outputs.filter(out => out.OutputKey === 'API')[0]?.OutputValue

if (!url) {
  url = outputs.filter(out => out.OutputKey === 'BucketURL')[0].OutputValue
}

if (!url) {
  throw new Error('App name not found')
}
else  {
  process.stdout.write(url)
}
