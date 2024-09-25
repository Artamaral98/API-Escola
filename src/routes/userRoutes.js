import { Router } from "express";
import UserController from "../controllers/userController.js"
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router()

router.post('/', UserController.create);
router.get('/', loginRequired, UserController.index); //Lista usuários.
router.get('/:id', UserController.show); //Lista um usuário específico.
router.put('/:id', loginRequired, UserController.update);
router.delete('/:id', loginRequired, UserController.delete)


export default router;


/*
index -> listar todos os objetos - GET
store/create -> criar objetos - POST
delete -> apagar - DELETE
show - listar um objeto específico - GET
update -> atualiza um objeto -> patch ou put
*/
