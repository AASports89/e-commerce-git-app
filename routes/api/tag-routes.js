//DEPENDENCIES//
  const router = require('express').Router();
  const { Tag, Product } = require('../../models');

//API ROUTE --> TAGS//
  router.get('/', (req, res) => {
//FIND TAGS --> PRODUCTS//
  Tag.findAll({
    include:
    {
      model: Product
    }
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get('/:id', (req, res) => {
 //FIND SINGLE TAG --> ID//
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: "Error❗ No tag found❗⛔"});
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.post('/', (req, res) => {
//ADD TAG//
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(() => { res.json({ message: "Success ✅ Tag created ✅"}) })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.put('/:id', (req, res) => {
 //UPDATE TAG --> ID//
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: "Error❗ No category found❗⛔"});
        return;
      }
      res.json({ message: "Success ✅ Tag updated ✅"});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.delete('/:id', (req, res) => {
//DELETE TAG --> ID//
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: "Error❗ No tag found❗⛔"});
        return;
      }
      res.json({ message: "Warning❗⛔ Category deleted❗❌"});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;