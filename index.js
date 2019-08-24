const express = require('express'),
    cors = require('cors'),
    path = require('path'),
    properties = require('./config/properties'),
    dequeRouter = require('./routes/deqeue');

const app = express();

// Enable Content-type JSON
app.use(express.json());
// Enable Contet-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Enable CORS for testing, not production
app.use(cors());

// app.get('/api', (req, res) => {
//     return res.send('Welcom to teleforge app');
// });

app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname, 'index.html'));
});

// API version 1 routes
app.use('/api/dequeue', dequeRouter);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on ${process.env.PORT || 4000} port.`);
});