const mongoose = require('mongoose');
const models = require('./models');
const uri = 'mongodb+srv://admin:pass@bcbeta-vjzep.mongodb.net/test?retryWrites=true&w=majority';
const db = {};

function connect() {
  mongoose.connect(uri, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', handleConnectError);
  db.on('open', handleConnectSuccess);
}

function handleConnectError(msg) {
  console.log('Error connecting to db', msg);
}

function handleConnectSuccess() {
  console.log('Successfully connected to db');
  createModels();
}

function createModels() {
  console.log('Creating models from schemas');
  models.forEach(m => {
    const model = mongoose.model(m.name, m.schema);
    db[m.name] = model;
  });
}

db.connect = connect;

module.exports = db;
