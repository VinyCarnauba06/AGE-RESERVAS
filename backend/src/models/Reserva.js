
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
  condominio: { type: Schema.Types.ObjectId, ref: 'Condominio', required: true },
  salao: { type: Schema.Types.ObjectId, ref: 'Salao', required: true },
  morador_nome: { type: String, required: true },
  apartamento: { type: String, required: true },
  data: { type: String, required: true }, // YYYY-MM-DD
  horario_inicio: { type: String }, // HH:MM
  horario_fim: { type: String },
  status: { type: String, enum: ['pendente','confirmado','pago','cancelado'], default: 'pendente' },
  valor: { type: Number, default: 0 },
  observacoes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Reserva', ReservaSchema);
