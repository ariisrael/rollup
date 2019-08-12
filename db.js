const mongoose = require('mongoose');
const models = require('./models');
const uri = 'mongodb+srv://admin:pass@bcbeta-vjzep.mongodb.net/test?retryWrites=true&w=majority';

function connect() {
  mongoose.connect(uri, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', handleConnectError);
  db.on('open', handleConnectSuccess);
}

function handleConnectError(msg) {
  console.log('Error', msg);
}

function handleConnectSuccess() {
  console.log('Success');
}

module.exports = {
  connect,
}
