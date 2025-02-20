const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Import routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');

// Middleware for Static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use Routes
app.use('/', indexRoute);
app.use('/about', aboutRoute);

// Server details
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

