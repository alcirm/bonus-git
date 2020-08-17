const experss = require('express');

const app = express();

app.get('/teste', (req, resp) => {
    return resp.json({ hello: 'world' })
});

app.listen(3333);