const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/', async (req, res) => {
  try {
    // Fetch HTML from dorar.net
    const response = await axios.get('https://dorar.net/');
    
    // Log the response to inspect its structure (optional)
    console.log(response);

    // Extract HTML content from the response
    const responseFromDorarNet = response.data;

    // Modify HTML
    const modifiedHtml = modifyHtml(responseFromDorarNet);

    // Send the modified HTML as the response
    res.send(modifiedHtml);
  } catch (error) {
    console.error('Error fetching or modifying HTML:', error);
    res.status(500).send('Internal Server Error');
  }
});

function modifyHtml(html) {
  try {
    const $ = cheerio.load(html);
    const switchButton = $('.switch_btn');

    if (switchButton.length > 0) {
      // Check if the element has a click method before calling it
      if (typeof switchButton.click === 'function') {
        // Simulate a click event
        switchButton.click();
        console.log('Switch button clicked successfully.');
      } else {
        console.log('Switch button does not have a click method.');
      }
    } else {
      console.log('Switch button not found');
    }

    return $.html();
  } catch (error) {
    console.error('Error modifying HTML:', error);
    return html; // Return the original HTML in case of an error
  }
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
