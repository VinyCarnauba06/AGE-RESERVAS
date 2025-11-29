# AGE - Backend (Express + Mongoose)

## O que tem aqui
- API REST básica para gerenciar: condomínios, salões, reservas
- Validação simples: checa limite de reservas por dia
- Seed script para popular exemplo de condomínios e salões

## Setup (local)
1. Copie `.env.example` para `.env` e ajuste `MONGO_URI` se necessário.
2. Instale dependências:
   ```bash
   npm install
   ```
3. Rode o seed para popular dados de exemplo (opcional):
   ```bash
   npm run seed
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Endpoints principais
- `GET /api/condominios` — listar condomínios
- `POST /api/condominios` — criar condomínio
- `GET /api/saloes?condominio=<id>` — listar salões por condomínio
- `POST /api/reservas` — criar reserva (checa limite por dia)
- `GET /api/reservas?condominio=<id>&data=YYYY-MM-DD` — listar reservas

## Observações
- Para desenvolvimento local use MongoDB (local ou Atlas).
- Se quiser, eu posso adicionar autenticação (JWT), logs e testes unitários.