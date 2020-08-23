const express = require('express')
const app = express()
const port = 3050

app.use(express.static('../client'))

app.listen(port, () => {
  console.log(`Tobias Niklas Becker Server listening at http://localhost:${port}`)
});