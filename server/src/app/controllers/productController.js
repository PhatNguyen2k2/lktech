const Product = new require('../models/product');

class ProductController {
  //[GET] /products/
  async show(req, res) {
    Product.find({})
      .then((product) => {
        res.status(200).json({ success: true, product });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[GET] /products/:slug
  async detail(req, res) {
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        res.status(200).json({ success: true, product });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[POST] /products/create
  async create(req, res) {
    const product = new Product(req.body);
    product
      .save()
      .then(() => {
        res.status(201).json({ success: true, message: 'successfull' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
  //[PUT] /products
  async edit(req, res) {
    Product.updateOne({ slug: req.params.slug }, req.body, { new: true })
      .then(() => {
        res.status(200).json({ success: true, message: 'successfully' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
  //[DELETE] /products/:id
  async delete(req, res) {
    Product.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({ success: true, message: 'successfully' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
}

module.exports = new ProductController();
