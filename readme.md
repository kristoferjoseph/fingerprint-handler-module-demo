This demonstrates the pattern of using an npm module as an installed hanlder function for `arc.http.async`
Specifically this demomstrates a package that looks up the fingerprinted file name of a static asset in an architect app.

Static files are stored in the `/public` folder by default in an arc app.
Assets in the `/public` folder are fingerprinted by default in arc apps.
If you have an app that needs to define an index route for dynamic content then you can use this pattern to add a route to access fingerprinted files.
