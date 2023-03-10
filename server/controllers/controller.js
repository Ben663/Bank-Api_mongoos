import { bankAccounts } from '../model/model.js';
import { validateObjectId, validateNumber } from './utils.js'

export const getUsers = async (req, res) => {
	try {
		// res.send('im in')
		const allBankUsers = await bankAccounts.find();
		res.status(200).send({ users: allBankUsers });
	} catch (error) {
		res.status(404).send(error.message);
	}
};
export const addUser = async (req, res) => {
	try {
		const { cash, credit } = req.body;
		const newUser = await bankAccounts.create({
			cash: cash || 0,
			credit: credit || 0,
		});
		res.status(201).send(newUser);

		// res.status(200).send({ message: 'Added Successfully' });
	} catch (error) {
		res.status(500).send(err.message);
	}
};
export const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		validateObjectId(id);
		const bankUsers = await bankAccounts.findById(id);
		if (!bankUsers) {
			throw Error('User Not Exist');
		}
		res.status(200).send({ user: bankUsers });
	} catch (error) {
		res.status(404).send(err.message);
	}
};
export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		validateObjectId(id);
        const { deleteCount } = await bankAccounts.deleteOne({ _id: _id });
        if (!deleteCount) {
            throw Error(`User ${id} does exist`);
            res.status(200).send({message: `User ${id} deleted`});
        }
    } catch (error) {
        res.status(404).send(err.message);
    }
};
export const deposit = async (req, res) => {
    try {
			const { id } = req.params;
			const { amount } = req.body;
            validateObjectId(id);
            validateNumber(amount);
			const User = await bankAccounts.findById(id);
			if (!User) {
				res.status(404).send({ error: 'User Not Found' });
			}
			bankAccounts.cash += amount;
			await bankAccounts.save();
			res
				.status(201)
				.send({ message: `added ${amount} to ${bankAccounts.id}` });
		} catch (error) {
        res.status(500).send({ error: error.message });
    }
};
export const withdraw = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount } = req.body;
        validateObjectId(id);
		validateNumber(amount);
        const bankUsers = await bankAccounts.findById(id);
        if (!bankUsers) {
					res.status(404).send(err.message);
				}
        userTotal = bankUsers.cash + bankUsers.credit;
        if (amount > userTotal) {
            throw Error('Not Enough Money');
        }
        //User.findByIdAndUpdata(id, {$set:{data}},{runVailidator:true})
        bankAccounts.cash -= amount;
        await bankAccounts.save();
        res.status(201).send({ message: `withraw ${amount}` })
    } catch (error) {
        res.status(500).send(error.message);
    }
};
export const updateCredit = async (req, res) => {
    try {
        const { id } = req.params;
        const { creditAmount } = req.body.amount;
        validateObjectId(id);
        validateNumber(creditAmount);
        const userUpdate = await bankAccounts.findById(id);
        bankAccounts.credit = creditAmount;
        const {
					userUpdate: { credit },
				} = await bankAccounts.save();
        res.status(201).send({ message: `User Credit now is ${credit}` });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

