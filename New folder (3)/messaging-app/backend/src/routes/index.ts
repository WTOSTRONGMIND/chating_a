import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/messages', router);
    router.get('/', indexController.getMessages.bind(indexController));
    router.post('/', indexController.sendMessage.bind(indexController));
}