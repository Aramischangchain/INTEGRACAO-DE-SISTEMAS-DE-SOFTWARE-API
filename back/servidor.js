require('./db/mongodb');
const produtoRouter = require('./routes/produtoRouter');
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const srv = express();
srv.use(morgan('dev'));
srv.use(express.urlencoded({'extended': true}));
srv.use(express.json());
srv.use(cors());

srv.use('/produtos', produtoRouter);

srv.get('/', (req, res) => {
    res.send("Servidor Express (GET)")
});

srv.listen(3000, () => {
    console.log("Servidor http://localhost:3000")
});


