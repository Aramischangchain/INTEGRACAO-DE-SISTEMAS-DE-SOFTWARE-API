
const mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/mongodbquaman';

mongoose.connect(url);

const con = mongoose.connection;

con.on('open', function(){
  console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function(){
  console.log('Desconectado do MongoDB!');
});