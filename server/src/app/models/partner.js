const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const PartnerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    origin: { type: String, require: true },
    founding: { type: Number, require: true },
    field: { type: String, require: true },
    application: { type: [String], require: true },
    logo: { type: String, require: true },
    link: { type: String, require: true },
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    timestamps: true
  }
);
mongoose.plugin(slug);
module.exports = mongoose.model('Partner', PartnerSchema);
