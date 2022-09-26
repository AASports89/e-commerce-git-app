//DEPENDENCIES//
  const router = require('express').Router();
  const apiRoutes = require('./api');

  router.use('/api', apiRoutes);
//ERROR//
  router.use((req, res) => {
    res.send("ERROR❗⛔ WRONG ROUTE❗⛔")
  });

  module.exports = router;