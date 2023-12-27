const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Your code to intercept and modify the response goes here
  res.send('Hello, World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
