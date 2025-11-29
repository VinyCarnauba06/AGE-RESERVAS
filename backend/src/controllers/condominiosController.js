
const Condominio = require('../models/Condominio');

exports.list = async (req, res) => {
  const items = await Condominio.find().sort('nome');
  res.json(items);
};

exports.get = async (req, res) => {
  const item = await Condominio.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Condomínio não encontrado' });
  res.json(item);
};

exports.create = async (req, res) => {
  const payload = req.body;
  const created = await Condominio.create(payload);
  res.status(201).json(created);
};

exports.update = async (req, res) => {
  const updated = await Condominio.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Condominio.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
