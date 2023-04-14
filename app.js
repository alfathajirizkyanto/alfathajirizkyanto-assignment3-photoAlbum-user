const express = require('express');
const app = express();
const router = require('./routers/index');
const PORT = 3000
const env = process.env.NODE_ENV


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);
if (env !== "test") {
    app.listen(PORT, () => {
      console.log(`Running on PORT ${PORT}`)
    })
  }
  

module.exports = app