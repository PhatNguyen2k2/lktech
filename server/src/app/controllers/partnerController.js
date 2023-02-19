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
}

module.exports = new PartnerController();
