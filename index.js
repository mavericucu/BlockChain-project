const bodyParser = require('body-parser');
const express = require('express');
const Blockchain = require('./blockchain');


const app = express();
const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain);
});

app.get('/api/mine', (req, res) => {
  const { data } = req.body;

  blockchain.addBlock({ data });

  res.redirect('/api/blocks');
});

const PORT =3000;
app.listen(3000, () => console.log(`listening at localhost:${PORT}`));