const express = require('express');
const cors = require('cors');
const routes = require('./routes/register');

const app = express();
const server = require('http').createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000, () => {
    console.log("API rodando na porta 3000");
});
