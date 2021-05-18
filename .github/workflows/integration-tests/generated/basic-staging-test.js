// eslint-disable-next-line import/no-unresolved
const tiny = require('tiny-json-http')
// eslint-disable-next-line import/no-unresolved
const test = require('tape')

const baseUrl = process.env.STAGING_URL

test('Request Root', async (t) => {
  t.plan(1)
  try {
    const result = await tiny.get({ url: baseUrl })
    t.ok(result.body, 'request to root responded')
  }
  catch (e) {
    t.fail('request to root failed')
  }
})
