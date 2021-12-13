const { startTracing } = require('@splunk/otel');

startTracing({
  serviceName: 'dashboard-microservice',
});

const express = require('express')
const app = express()
const port = 80

const getUrlContents = (url, fetch) => {
  return new Promise((resolve, reject) => { 
    fetch(url, resolve, reject)
    .then(res => res.text())
    .then(body => resolve(body))
  })
}

app.get('/movies', async (req, res) => {
  //fetch data running from moives service
  const movies = await getUrlContents('http://localhost:3000/movies', require('node-fetch'))
  res.type('json')
  res.send(JSON.stringify({ dashboard: movies }))

})

app.get('/directors', async (req, res) => {
  //fetch data running from directors service
  const directors = await getUrlContents('http://localhost:3001/directors', require('node-fetch'))
  res.type('json')
  res.send(JSON.stringify({ dashboard: directors }))

})

app.get('/actors', async (req, res) => {
  //fetch data running from actors service
  const actors = await getUrlContents('http://localhost:3002/actors', require('node-fetch'))
  res.type('json')
  res.send(JSON.stringify({ dashboard: actors }))

})

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`)})
