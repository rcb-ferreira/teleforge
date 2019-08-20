const express = require('express'),
    cors = require('cors'),
    properties = require('./config/properties')

const app = express();

// Enable Content-type JSON
app.use(express.json());
// Enable Contet-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Enable CORS for testing, not production
app.use(cors());

app.get('/', (req, res) => {
    return res.send('Welcom to teleforge app');
});
// API version 1 routes
// app.use('/api/v1', indexRouter);
// app.use('/api/v1/users', usersRouter);
// app.use('/api/v1/posts', postsRouter);

app.listen(properties.PORT, () => {
    console.log(`Server is running on ${properties.PORT} port.`);
});