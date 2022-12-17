import { bankUsers } from '../model/schema.js';

export const addUserToMongoose = async (body) => {
	try {
		const user = await bankUsers.create(body);
		return user;
	} catch (err) {
		throw err;
	}
};
export const getAllUsersFromMongoose = async () => {
	const allUsers = await bankUsers.find({});
	if (allUsers.length == 0) {
		return 'No Users Found';
	} else {
		return allUsers;
	}
};
export const updateUserFromMongoose = async (body) => {
	const updateFields = ['name', 'lastName', '_id'];
	const reqFields = Object.keys(body);
	if (updateFields.every((key) => reqFields.includes(key))) {
		const updatedUser = await User.updateOne(
			{ _id: body._id },
			{ $set: { ...body } }
		);
		return updatedUser;
	}
	return 'Please Fill the following: lastName, name and _id';
};
export const deleteUserFromMongoose = async (id) => {
	const user = await bankUsers.findOneAndDelete({ _id: id });
	if (user.deletedCount === 1) {
		console.log('deleted document.');
		return { user, msg: 'deleted' };
	} else {
		console.log('Deleted 0 documents.');
		return 'Deleted 0';
	}
};
