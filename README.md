# simple-angular-SPA

Homework on AngularJS v1.

## Serving locally with NodeJS http-server

Install the server: `npm install http-server -g`
Start it and point to the application: `http-server C:\location\to\app`
The application will be available at "http://localhost:8080/". You can specify a different port by passing '-p <port>' option when starting the server.

## Serving JSON with NodeJS json-server

Install the server: `npm install json-server -g`
Start it: `json-server --watch .\books.json`
It will index elements in JSON file and store them in a database. By default, JSON tree contents are available on http://localhost:3000.
