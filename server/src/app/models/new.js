const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const newSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: false },
    image: { type: String, required: false },
    opening: { type: String, required: false },
    paragraph: [
      {
        type: { type: String, required: true },
        title: { type: String, required: false },
        image: { type: String, required: false },
        description: { type: String, required: false },
        descriptionLine: { type: String, required: false }
      }
    ],
    ending: { type: String, required: false },
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    timestamps: true
  }
);
mongoose.plugin(slug);
module.exports = mongoose.model('New', newSchema);
