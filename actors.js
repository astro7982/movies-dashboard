const { startTracing } = require('@splunk/otel');

startTracing({
  serviceName: 'actors-microservice',
});

const express = require('express')
const app = express()
const port = 3002

app.get('/actors', async function (req, res) {
  res.type('json')
  res.send(({actors: [
    { name: 'Roy Scheider'}, 
    { name: 'Jamie Foxx'},
    { name: 'Wayne Knight'},
  ]}))
})


app.listen( port, () => { console.log(`Listening at http://localhost:${port}`)}
)
