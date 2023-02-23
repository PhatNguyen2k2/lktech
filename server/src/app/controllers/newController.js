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
}
module.exports = new NewController();
