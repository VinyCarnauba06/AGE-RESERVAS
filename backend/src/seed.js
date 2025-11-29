
require('dotenv').config();
const mongoose = require('mongoose');
const Condominio = require('./models/Condominio');
const Salao = require('./models/Salao');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/age_reservas_db';

async function main(){
  await mongoose.connect(MONGO_URI);
  console.log('Conectado para seed');

  await Condominio.deleteMany();
  await Salao.deleteMany();

  const condos = [
    { nome: 'Residencial Jardim', valor_salao: 200, forma_pagamento: 'antes', limite_por_dia: 1 },
    { nome: 'Condomínio Verde', valor_salao: 250, forma_pagamento: 'boleto', limite_por_dia: 2 },
    { nome: 'Condomínio Portal', valor_salao: 150, forma_pagamento: 'secretaria', limite_por_dia: 1 }
  ];

  for(const c of condos){
    const created = await Condominio.create(c);
    await Salao.create({ condominio: created._id, nome: 'Salão Principal' });
    await Salao.create({ condominio: created._id, nome: 'Salão de Festas II' });
  }

  console.log('Seed finalizado');
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
