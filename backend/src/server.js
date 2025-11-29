require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const condominiosRoutes = require('./routes/condominios');
const saloesRoutes = require('./routes/saloes');
const reservasRoutes = require('./routes/reservas');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/age_reservas_db';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

app.get('/', (req, res) => res.json({ ok: true, service: 'AGE Reservas API' }));

app.use('/api/condominios', condominiosRoutes);
app.use('/api/saloes', saloesRoutes);
app.use('/api/reservas', reservasRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));