const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const app = express();

app.use(bodyParser.json());
app.use("/", userRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(5000);