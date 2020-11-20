const app = require('./index.js');
const port = 3005

// listen outside of app so this async function doesn't hold up our jest tests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
