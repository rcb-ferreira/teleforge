const express = require('express'),
    cors = require('cors'),
    properties = require('./config/properties'),
    dequeRouter = require('./routes/deque');

const app = express();

// Enable Content-type JSON
app.use(express.json());
// Enable Contet-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Enable CORS for testing, not production
app.use(cors());

app.get('/api', (req, res) => {
    return res.send('Welcom to teleforge app');
});

// API version 1 routes
app.use('/api', dequeRouter);

app.listen(properties.PORT, () => {
    console.log(`Server is running on ${properties.PORT} port.`);
});