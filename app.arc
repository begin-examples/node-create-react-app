@app
begin-app

@http
/api
	method get
	src /api

@static
folder build
spa true
