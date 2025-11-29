
const Reserva = require('../models/Reserva');
const Salao = require('../models/Salao');
const Condominio = require('../models/Condominio');

// helper to count reservations on date for condominio
async function countReservations(condominioId, date) {
  return await Reserva.countDocuments({ condominio: condominioId, data: date, status: { $ne: 'cancelado' } });
}

exports.list = async (req, res) => {
  const filter = {};
  if (req.query.condominio) filter.condominio = req.query.condominio;
  if (req.query.data) filter.data = req.query.data;
  const items = await Reserva.find(filter).populate('condominio salao').sort('-data');
  res.json(items);
};

exports.create = async (req, res) => {
  const payload = req.body;
  // basic validation
  const sala = await Salao.findById(payload.salao);
  if (!sala) return res.status(400).json({ error: 'Salão inválido' });
  const cond = await Condominio.findById(payload.condominio);
  if (!cond) return res.status(400).json({ error: 'Condomínio inválido' });

  // check limit per day
  const count = await countReservations(cond._id, payload.data);
  if (count >= cond.limite_por_dia) {
    return res.status(400).json({ error: 'Limite de reservas para esta data atingido' });
  }

  // create reservation
  const created = await Reserva.create(payload);
  res.status(201).json(created);
};

exports.update = async (req, res) => {
  const updated = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Reserva.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
