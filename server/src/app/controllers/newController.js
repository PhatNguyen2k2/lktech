const New = require('../models/new');

class NewController {
  //[GET] /news/show/:page
  async show(req, res) {
    req.params.page === '0'
      ? New.find({})
          .sort({ createdAt: -1 })
          .then((news) => res.status(200).json({ success: true, news }))
          .catch((err) => res.status(500).json({ success: false, err }))
      : Promise.all([
          New.find({})
            .sort({ createdAt: -1 })
            .skip((req.params.page - 1) * 12)
            .limit(12),
          New.countDocuments({})
        ])
          .then(([news, count]) => {
            count = Math.ceil(count / 12);
            res.status(200).json({ success: true, news, count });
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
    Promise.all([
      New.findOne({ slug: req.params.slug }),
      New.find({ slug: { $ne: req.params.slug } })
        .sort({ createdAt: -1 })
        .limit(5)
    ])
      .then(([detail, more]) => {
        res.status(200).json({ success: true, detail, more });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[PUT] /news
  async edit(req, res) {
    New.updateOne({ slug: req.params.slug }, req.body, { new: true })
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
