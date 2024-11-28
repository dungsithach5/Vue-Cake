const mongoose = require('mongoose');

const billDetailSchema = new mongoose.Schema({
  id_bill: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill' },
  id_product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number },
  unit_price: { type: Number },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BillDetail', billDetailSchema);
