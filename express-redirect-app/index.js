const express = require('express');
const app = express();

// Endpoint 1 - Redirect to the first hardcoded URL
app.get('/endpoint1', (req, res) => {
    res.redirect(301, 'https://example.com/your-first-url');
});

// Endpoint 2 - Redirect to the second hardcoded URL
app.get('/endpoint2', (req, res) => {
    res.redirect(301, 'https://example.com/your-second-url');
});

// Listen on port 3000, which will be set dynamically by Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
