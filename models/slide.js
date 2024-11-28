const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  link: { type: String, required: true },
  image: { type: String, required: true }
});

const Slide = mongoose.model('Slide', slideSchema);

module.exports = Slide;
