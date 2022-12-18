import { Router } from 'express';
import {
	getUsers,
	getUser,
	addUser,
	deleteUser,
	deposit,
	withdraw,
	updateCredit,
} from '../controllers/controller.js';
export const indexRouter = Router();

indexRouter.get('/add', getUsers);
indexRouter.get('/:id', getUser);

indexRouter.post('/add', addUser);

indexRouter.patch('/deposit/:id', deposit);
indexRouter.patch('/withdraw/:id', withdraw);
indexRouter.patch('/updateCredit/:id', updateCredit);

indexRouter.delete('/:id', deleteUser);
