const express = require('express');
const app = express();
const path = require('path');

// This tells the server to look for files in the 'public' folder
app.use(express.static('public'));

// This route ensures the page renders correctly
app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calendar.html'));
});

app.listen(3000, () => console.log("=== Engine Online: http://localhost:3000/schedule ==="));