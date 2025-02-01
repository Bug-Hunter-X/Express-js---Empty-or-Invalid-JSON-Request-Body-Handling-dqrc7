const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (req.method === 'POST' && req.is('application/json')) {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      if (data.length === 0) {
        return next({ status: 400, message: 'Empty request body' });
      }
      try {
        req.body = JSON.parse(data);
        next();
      } catch (error) {
        return next({ status: 400, message: 'Invalid JSON' });
      }
    });
  } else {
    next();
  }
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('User registered');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});