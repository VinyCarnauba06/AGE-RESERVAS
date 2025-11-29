
const Salao = require('../models/Salao');

exports.list = async (req, res) => {
  const filter = {};
  if (req.query.condominio) filter.condominio = req.query.condominio;
  const items = await Salao.find(filter).populate('condominio').sort('nome');
  res.json(items);
};

exports.create = async (req, res) => {
  const created = await Salao.create(req.body);
  res.status(201).json(created);
};

exports.update = async (req, res) => {
  const updated = await Salao.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Salao.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
