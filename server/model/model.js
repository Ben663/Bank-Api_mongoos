import { Schema, model } from 'mongoose'
const bankSchema = new Schema(
	{
		// remember to check it and update us
		cash: {
			type: [Number, 'please put here a number'],
			default: 0,
		},
		credit: {
			type: Number,
			default: 0,
			min: [0, 'Credit need to be positive'],
		},
		isActive: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);
export const bankUsers = model('user', bankSchema);

