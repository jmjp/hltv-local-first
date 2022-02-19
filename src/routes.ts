import {Router} from 'express';
import PlayerController from './controllers/PlayerController';
const routes = Router();

routes.get('/player/:name', PlayerController.index);

export default routes;