const tiny = require('tiny-json-http')
// eslint-disable-next-line import/no-unresolved
const test = require('tape')
// eslint-disable-next-line import/no-unresolved
const sandbox = require('@architect/sandbox')

const baseUrl = 'http://localhost:3333'

// this starts a sandbox environment for the tests to execute in.
test('start', async (t) => {
  t.plan(1)
  await sandbox.start()
  t.ok(true, 'started')
})

test('Request to Root', async (t) => {
  t.plan(1)
  try {
    const result = await tiny.get({ url: baseUrl })
    t.ok(result.body, 'request to root responded')
  }
  catch (e) {
    t.fail('request to root failed')
  }
})

// this ends sandbox
test('end', async (t) => {
  t.plan(1)
  await sandbox.end()
  t.ok(true, 'ended')
})
