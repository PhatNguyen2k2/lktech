const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  introduce:{type: String, required: false},
  model: { type: String, required: false },
  type: { type: String, required: true },
  Series: { type: String, required: false },
  flow: { type: String, required: false },
  flowRate: { type: String, required: false },
  maximumInlet: { type: String, required: false },
  minimumOutlet: { type: String, required: false },
  inlet: { type: String, required: false },
  outlet: { type: String, required: false },
  gauge: { type: String, required: false }
});

module.exports = mongoose.model('Accessory', AccessorySchema);
