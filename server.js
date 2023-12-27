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


const cheerio = require('cheerio');

// Inside your route handler
const modifiedHtml = modifyHtml(responseFromDorarNet);
res.send(modifiedHtml);

function modifyHtml(html) {
  const $ = cheerio.load(html);
  const switchButton = $('.switch_btn');

  if (switchButton.length > 0) {
    switchButton.click(); // Simulate a click event
  } else {
    console.log('Switch button not found');
  }

  return $.html();
}
