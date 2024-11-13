import { Router } from "express";
import { mocksController } from "../controllers/mocks.controller.js";

const router = Router();

router.get('/mockingusers', mocksController.mockingusers)

router.get('/mockingpets', mocksController.mockingpets)

router.post('/generateData/:numUsers/:petUsers', mocksController.generateData)

router.get('/users', mocksController.getUsers)

router.get('/pets', mocksController.getPets)

export default router 