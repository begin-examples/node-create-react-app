exports.handler = async function http (req) {
  console.log('Begin API called')
  return {
    headers: {'content-type': 'application/json; charset=utf8'},
    body: JSON.stringify({
      message: 'Hello from your Begin API!'
    })
  }
}
