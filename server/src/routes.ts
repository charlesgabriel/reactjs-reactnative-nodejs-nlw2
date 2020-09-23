import express from 'express';
import ClassesControllers from './controllers/classesController'
import ConnectionsController from './controllers/connectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;