const db = require('../db');

const menuControl = {
  get: (req, res) => {
    const menuId = req.query.id;
    const userId = req.query.user;
    const teamId = req.query.team;
    const storeId = req.query.store;

    if (!menuId) {
      db.Menu.find({}, (err, list) => {
        if (!err) return res.send(list);
        res.send(500);
      });
    }
  },
  post: (req, res) => {
    db.Menu.create(req.body, (err, msg) => {
      if (!err) return res.send(200);
      res.send(500);
    })
  }
}

const storeControl = {
  get: (req, res) => {
    const storeId = req.query.id;
    if (!storeId) {
      db.Store.find({}, (err, list) => {
        if (err) return res.send(500);
        res.send(list);
      })
    }
  },
  post: (req, res) => {
    console.log(req.body);
    db.Store.create(req.body, (err, msg) => {
      if (!err) return res.send(200);
      res.send(500);
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
