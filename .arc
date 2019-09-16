# Warning: do not edit
# --------------------
# This is a generated file and will be overwritten

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
