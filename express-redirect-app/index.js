const express = require('express');
const app = express();

// Endpoint 1 - Redirect to the first hardcoded URL
app.get('http://Tomymacias.github.io/endpoint1', (req, res) => {
    res.redirect(301, 'https://www.google.com/search?q=equi+fernandez&rlz=1C1GCEA_enAR1099AR1099&oq=eq&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgoIARAuGLEDGIAEMg8IAhBFGDkYgwEYsQMYgAQyEwgDEC4YgwEYxwEYsQMY0QMYgAQyCggEEAAYsQMYgAQyEAgFEAAYgwEYsQMYgAQYigUyDQgGEAAYgwEYsQMYgAQyBggHEEUYPNIBCDMwMjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8');
});

// Endpoint 2 - Redirect to the second hardcoded URL
app.get('https://lorenzo-santamarina-proyecto-git-hub-io.vercel.app//endpoint2', (req, res) => {
    res.redirect(301, 'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zEkyTstISckwYPTiTsxJzFMoSyxKzUkEAHsvCPs&q=alan+varela&rlz=1C1GCEA_enAR1099AR1099&oq=alan+&gs_lcrp=EgZjaHJvbWUqDwgBEC4YQxixAxiABBiKBTIMCAAQIxgnGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyBggCEEUYOTIMCAMQABhDGIAEGIoFMg0IBBAuGNQCGLEDGIAEMg0IBRAuGNQCGLEDGIAEMg0IBhAuGIMBGLEDGIAEMg0IBxAuGIMBGLEDGIAEMg0ICBAAGIMBGLEDGIAEMgoICRAuGLEDGIAE0gEIMjg4M2owajmoAgCwAgA&sourceid=chrome&ie=UTF-8');
});

// Listen on port 3000, which will be set dynamically by Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
