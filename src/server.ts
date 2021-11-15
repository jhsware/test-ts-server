export function pong(req, res) {
  return res.send('pong')
}

export function throwNow(req, res) {
  throw Error('oops')
}
