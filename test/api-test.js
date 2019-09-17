let test = require('tape')
let tiny = require('tiny-json-http')
let sandbox = require('@architect/sandbox')
let base = 'http://localhost:6666'

let end
test('Start', async t => {
  t.plan(1)
  end = await sandbox.start()
  t.ok(end, 'Sandbox started')
})

test('get /api', async t => {
  t.plan(2)
  try {
    let result = await tiny.get({url: `${base}/api`})
    t.ok(result, 'Got API response', console.log(result.body))
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
  end()
  tiny.get({url: base},
  function win (err, result) {
    if (err) {
      t.equal(err.code, 'ECONNREFUSED', 'Sandbox succssfully shut down')
    } else {
      t.fail('Sandbox did not shut down')
    }
  })
})
