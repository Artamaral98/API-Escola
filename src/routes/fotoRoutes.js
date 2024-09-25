import { Router } from 'express'

import loginRequired from '../middlewares/loginRequired.js'
import fotoController from '../controllers/fotoController.js';

const router = new Router();
router.post('/', loginRequired, fotoController.create)

export default router;
