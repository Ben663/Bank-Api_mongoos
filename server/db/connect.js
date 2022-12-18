import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@bankapi.6bdeeer.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(URL, (err, mongoDbInstance) => {
	if (err) throw Error('connectin faild : ' + err);
	const { host, port, name } = mongoDbInstance;
	console.log({ host, port, name });
});
