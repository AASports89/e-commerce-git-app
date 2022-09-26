//DEPENDENCIES//
  const router = require('express').Router();
  const {Category, Product} = require('../../models');

//API CATEGORIES//
  router.get('/', (req, res) => {
//CATEGORIES & PRODUCTS//
    Category.findAll
      ({
        include: {
          model: Product
        }
      })
      .then(categoryData => res.json(categoryData))
        .catch(err => {
          console.log(err);
            res.status(500).json(err);
      });
    });
  router.get('/:id', (req, res) => {
//FIND BY ID CATEGORIES & PRODUCTS//
  Category.findOne 
  ({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({message: "Error❗ No category found❗⛔"});
        return;
      }
      res.json(categoryData);
    })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });
  });
  router.post('/', (req, res) => {
//ADD CATEGORY//
    Category.create({
      category_name: req.body.category_name
    })
      .then(() => { res.json({ message: "Success ✅ Category added ✅"}) })
        .catch(err => {
          console.log(err);
            res.status(500).json(err);
      });
  });
router.put('/:id', (req, res) => {
//UPDATE CATEGORY//
  Category.update
    ({
      category_name: req.body.category_name
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
      res.json({ message: "Success ✅ Category updated ✅"});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  router.delete('/:id', (req, res) => {
//DELETE CATEGORY//
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: "Error❗ No category found❗⛔"});
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