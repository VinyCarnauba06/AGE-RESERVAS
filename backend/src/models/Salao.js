
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalaoSchema = new Schema({
  condominio: { type: Schema.Types.ObjectId, ref: 'Condominio', required: true },
  nome: { type: String, required: true },
  capacidade: { type: Number, default: 50 },
  ativo: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Salao', SalaoSchema);
