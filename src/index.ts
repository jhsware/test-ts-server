import dotenv from 'dotenv'
import express from 'express'
import { certificateFor } from 'devcert'
import https from 'https'
import http from 'http'

const PORT = 8080
const SSL = true

dotenv.config()
const server = express()

server.use((req, res, next) => {
  console.log(req.pathname)
  next()
})

server.get('/', (req, res) => {
  return res.send('pong')
})

;(async function main() {
  if (SSL) {
    const sslCerts = await certificateFor('localdev.kth.se', {
      skipHostsFile: true, // Don't modify /etc/hosts
      skipCertutil: true, // This option will tell devcert to avoid installing certutil tooling.
    })
    https.createServer(sslCerts, server).listen(PORT, () => {
      console.info(`Started HTTPS server on https://localhost:${PORT}`)
    })
  } else {
    http.createServer(server).listen(PORT, () => {
      console.info(`Started HTTP server on http://localhost:${PORT}`)
    })
  }
})()
