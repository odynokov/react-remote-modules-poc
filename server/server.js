const express = require('express')
const app = express()
const port = 3333
const path = require('path');
const cors = require('cors');
const {modules} = require('./package.json');

app.use(cors());

app.use('/modules', express.static(path.join(__dirname, '/public/modules')));

app.get('/modules', (req, res) => res.json(modules));

app.listen(port, () => console.log(`App listening on port ${port}!`));
