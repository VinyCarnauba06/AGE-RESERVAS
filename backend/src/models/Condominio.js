
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CondominioSchema = new Schema({
  nome: { type: String, required: true },
  valor_salao: { type: Number, default: 0 },
  forma_pagamento: { type: String, enum: ['antes', 'boleto', 'secretaria'], default: 'boleto' },
  limite_por_dia: { type: Number, default: 1 },
  horario_inicio: { type: String, default: '08:00' },
  horario_fim: { type: String, default: '23:00' },
  ativo: { type: Boolean, default: true },
  observacoes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Condominio', CondominioSchema);
