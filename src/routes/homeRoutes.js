// import express from 'express'
//ou apenas o route
import { Router } from 'express'

import HomeController from "../controllers/homeController.js"
const router = new Router();

router.post('/', HomeController.create)


export default router;


/*
index -> listar todos os objetos - GET
store/create -> criar objetos - POST
delete -> apagar - DELETE
show - listar um objeto específico - GET
update -> atualiza um objeto -> patch ou put
*/
