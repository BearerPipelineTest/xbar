module github.com/matryer/xbar/pkg/pluginrepo

go 1.15

replace github.com/matryer/xbar/pkg/metadata => ../../pkg/metadata

require (
	github.com/golang/protobuf v1.4.2 // indirect
	github.com/google/go-github v17.0.0+incompatible
	github.com/google/go-querystring v1.0.0 // indirect
	github.com/matryer/is v1.4.0
	github.com/matryer/xbar/pkg/metadata v0.0.0-00010101000000-000000000000
	github.com/pkg/errors v0.9.1
	github.com/snabb/sitemap v1.0.0
	golang.org/x/net v0.0.0-20200625001655-4c5254603344 // indirect
	golang.org/x/oauth2 v0.0.0-20190226205417-e64efc72b421
)
