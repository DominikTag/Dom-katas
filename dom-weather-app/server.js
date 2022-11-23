const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;

app.listen(port, () => {
    console.log(`App listens on port ${port}`);
});


app.use(express.static(__dirname + '/public'));


app.get('/', cors(), (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})