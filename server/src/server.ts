import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// porta: 3333
app.listen(3333);

// Rota:
// http://localhost:3333/users
// Recurso:
// '/users'

// Métodos: GET - Buscar/Listar, POST - Criar, PUT - Atualizar, DELETE - Deletar

// Parametros:
// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recursos quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação