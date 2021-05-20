const inventory = require('@architect/inventory')

inventory({}).then(inv => process.stdout.write(inv.get.app()))
