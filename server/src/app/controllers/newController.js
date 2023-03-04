const New = require('../models/new');

class NewController {
  //[GET] /news
  async show(req, res) {
    New.find({})
      .then((news) => {
        res.status(200).json({ success: true, news });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[POST] /news/create
  async create(req, res) {
    const news = new New(req.body);
    news
      .save()
      .then(() => {
        res.status(201).json({ success: true, message: 'successfull' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
  //[GET] /news/:slug
  async detail(req, res) {
    New.findOne({ slug: req.params.slug })
      .then((news) => {
        res.status(200).json({ success: true, news });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[PUT] /news
  async edit(req, res) {
    New.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true })
      .then(() => {
        res.status(200).json({ success: true, message: 'successfully' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
  //[DELETE] /news/:id
  async delete(req, res) {
    New.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({ success: true, message: 'successfully' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
}
module.exports = new NewController();
