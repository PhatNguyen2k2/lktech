const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    model: { type: [String], required: true },
    power: { type: String, required: false }, //laser
    output: { type: [String], required: false },
    maximumenergy: { type: [String], required: false },
    frequency: { type: String, required: false },
    wavelength: { type: String, required: false },
    focaldistance: { type: [String], required: false },
    weldingwidth: { type: String, required: false },
    observe: { type: String, required: false },
    headsize: { type: String, required: false },
    drivetrain: { type: String, required: false },
    cooling: { type: String, required: false },
    electric: { type: String, required: false },
    controlEIT: { type: String, required: false },
    accessories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Accessory',
      required: false
    },
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    timestamps: true
  }
);
mongoose.plugin(slug);
ProductSchema.index({ name: 'text', type: 'text' });

module.exports = mongoose.model('LaserProduct', ProductSchema);
