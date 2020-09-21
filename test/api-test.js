let test = require('tape')
let tiny = require('tiny-json-http')
let sandbox = require('@architect/sandbox')
let base = 'http://localhost:6666'

test('Set up env', t => {
  t.plan(1)
  t.ok(sandbox, 'sandbox loaded')
})

test('Start the Sandbox', async t => {
  t.plan(1)
  let result = await sandbox.start()
  t.equal(result, 'Sandbox successfully started')
})

test('get /api', async t => {
  t.plan(2)
  try {
    let result = await tiny.get({url: `${base}/api`})
    t.ok(result, 'Got API response', result.body)
    t.equal(
      result.body.message,
      'Hello from your Begin API!',
      'API response should match.'
    )
  } catch (err) {
    t.fail(err)
  }

})

test('End', async t => {
  t.plan(1)
  let result = await sandbox.end()
  t.equal(result, 'Sandbox successfully shut down')
})
