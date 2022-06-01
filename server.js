const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;app.listen(port);console.log('M2 API server started on: ' + port);