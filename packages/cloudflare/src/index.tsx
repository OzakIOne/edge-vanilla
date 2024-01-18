import { Hono } from 'hono'
import { renderer } from './renderer'
import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get('/og', (c) => {
  return new ImageResponse(<div style={{ display: 'flex' }}>Hello, world!</div>, {
    width: 1200,
    height: 630,
  })
})

export default app
