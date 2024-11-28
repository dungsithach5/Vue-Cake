const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id_type: { type: Number }, // Nếu cần liên kết thì thay bằng ObjectId
  description: { type: String },
  unit_price: { type: Number },
  promotion_price: { type: Number },
  image: { type: String },
  unit: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
