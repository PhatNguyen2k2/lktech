const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    paragraph: [
      {
        type: { type: String, required: true },
        title: { type: String, required: false },
        image: { type: String, required: false },
        description: { type: String, required: false },
        descriptionLine: { type: String, required: false }
      }
    ],
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    timestamps: true
  }
);
mongoose.plugin(slug);
ProductSchema.index({ name: 'text', type: 'text' });

module.exports = mongoose.model('Product', ProductSchema);
