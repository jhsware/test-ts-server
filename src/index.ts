import dotenv from 'dotenv'
import express from 'express'
import { certificateFor } from 'devcert'
import https from 'https'
import http from 'http'
import { pong, throwNow } from './server'

const PORT = 8080
const SSL = false

dotenv.config()
const server = express()

server.use((req, res, next) => {
  console.log(req.pathname)
  next()
})

server.get('/', pong)
server.get('/throw', throwNow)
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
