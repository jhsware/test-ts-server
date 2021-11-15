import { pong } from './server'

describe('route handler', () => {
  it('returns pong', (done) => {
    const mockRes = {
      send: (outp) => {
        expect(outp).toBe('pong')
        done()
      },
    }
    pong(undefined, mockRes)
  })
})
