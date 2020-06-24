@app
begin-app

@static
folder build

@http
get /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
