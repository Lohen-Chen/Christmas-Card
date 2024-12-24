const express = require('express');
const path = require('path');
const app = express();
const PORT = 200;

// Serve static files from both 'cards' and 'images'
app.use(express.static(path.join(__dirname, 'cards')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Path to your HTML file
const IndexHTML = path.join(__dirname, 'cards/index.html');

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(IndexHTML, (err) => {
        if (err) {
            console.error('Error sending HTML file:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.use((req, res, next) => {
    console.log(`Request for ${req.url}`);
    next();
  });
  

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
