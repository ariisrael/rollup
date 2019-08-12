const db = require('../db');

const menuControl = {
  get: (req, res) => {
    const menuId = req.query.id;
    const userId = req.query.user;
    const teamId = req.query.team;
    const storeId = req.query.store;
    res.send('GET /menu');
  },
  post: (req, res) => {

    res.send('POST /menu');
  }
}

const storeControl = {
  get: (req, res) => {
    const storeId = req.query.id;
  },
  post: (req, res) => {
    console.log(req.body);
    db.Store.create(req.body, (err, res) => {
      if (err) console.log('Error!', err);
      console.log(res);
    })
  }
}

const teamControl = {
  get: (req, res) => {

  },
  post: (req, res) => {

  }
}

const userControl = {
  get: (req, res) => {

  },
  post: (req, res) => {

  }
}

module.exports = {
  menu: menuControl,
  store: storeControl,
  team: teamControl,
  user: userControl
}
