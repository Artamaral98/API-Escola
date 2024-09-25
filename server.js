import app from './app.js'

const port = 3000;
app.listen(port, (() => {
  console.log();
  console.log(`escutando na porta: http://localhost:${port}`)
}))
