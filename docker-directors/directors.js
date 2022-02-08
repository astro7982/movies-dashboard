const { startTracing } = require('@splunk/otel');

startTracing({
  serviceName: 'directors-microservice',
});

const express = require('express')
const app = express()
const port = 3001

app.get('/directors', async function (req, res) {
  res.type('json')
  res.send(({directors: [
    { name: 'Joe Alves'}, 
    { name: 'Ian Toynton'},
    { name: 'Steven Spielberg'},
  ]}))
})


app.listen( port, () => { console.log(`Listening at http://directors:${port}`)}
)
