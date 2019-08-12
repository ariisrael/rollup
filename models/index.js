const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  categories: [String],
  items: [Object],
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store'
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }
});

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    name: String,
    street: String,
    city: String,
    state: String,
    zip: String
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }
});

const UserSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  role: String,
  admin: {
    type: Boolean,
    default: false
  },
});

module.exports = [
  {
    name: 'Menu',
    schema: MenuSchema
  },
  {
    name: 'Store',
    schema: StoreSchema
  },
  {
    name: 'User',
    schema: UserSchema
  },
  {
    name: 'Team',
    schema: TeamSchema
  }
]
