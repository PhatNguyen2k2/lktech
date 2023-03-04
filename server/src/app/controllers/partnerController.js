const Partner = require('../models/partner');

class PartnerController {
  //[GET] /partners/
  async show(req, res) {
    Partner.find({})
      .then((partner) => {
        res.status(200).json({ success: true, partner });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[GET] /partners/:slug
  async detail(req, res) {
    Partner.findOne({ slug: req.params.slug })
      .then((partner) => {
        res.status(200).json({ success: true, partner });
      })
      .catch((err) => {
        res.status(500).json({ success: false, err });
      });
  }
  //[POST] /partners/create
  async create(req, res) {
    const partner = new Partner(req.body);
    partner
      .save()
      .then(() => {
        res.status(201).json({ success: true, message: 'successfull' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
  //[PUT] /partners
  async edit(req, res) {
    Partner.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true
    })
      .then(() => {
        res.status(200).json({ success: true, message: 'successfully' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
  //[DELETE] /partners/:id
  async delete(req, res) {
    Partner.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({ success: true, message: 'successfully' });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  }
}

module.exports = new PartnerController();
