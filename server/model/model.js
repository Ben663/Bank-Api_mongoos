import { Schema, model } from 'mongoose'
const bankSchema = new Schema(
	{
		cash: {
			type: Number,
			default: 0,
		},
		credit: {
			type: Number,
			default: 0,
			min: 0,
		},
		isActive: {
			type: Boolean,
		},
	},
	// { timestamps: true }
);
export const bankAccounts = model('Account', bankSchema);



// export { bankAccounts, bankUsers };

