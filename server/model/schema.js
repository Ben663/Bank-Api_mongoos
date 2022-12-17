const userSchema = new Schema({
	Name: {
		type: String,
	},
	lastName: {
		type: String,
	},
	age: {
		type: Number,
	},
	account: [],
});
export const bankUsers = model('Account', userSchema);
