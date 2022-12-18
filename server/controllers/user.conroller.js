import{ getAllUsersFromMongoose} from '../config/mongoos.js'
import { bankUsers } from '../model/model.js';


export const addUser = async (req, res) => {
	try {
		const { name, lastName, age } = req.body;
		const newUser = await bankUsers.create({ name, lastName, age });
		return res.status(201).send(newUser);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const allUsers = await getAllUsersFromMongoose();
		if (allUsers === 'No Users Found') {
			return res.status(404).send('No Users Found');
		}
		res.status(200).send(allUsers);
	} catch (error) {
		res.status(404).send('error' + error);
	}
};

export const getUser = async (req, res) => {
	try {
		const user = await bankUsers.findOne({ _id: req.params.id });
		console.log(user);
		if (!user) {
			return res.status(404).send('Error: User Not Found');
		}
		return res.status(200).send(user);
	} catch (error) {
		res.status(404).send('error:' + error.message);
	}
};