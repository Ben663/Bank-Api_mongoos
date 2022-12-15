import mongoose from 'mongoose';

export const objectId = mongoose.Types.objectId;

export const validateObjectId = (id) => {
    if (!objectId.isVaild(id)) {
        const error = new Error('Invaild Id');
        error.code = 404
        throw error;
    }
};
export const validateNumber = (number) => {
    if (!Number.isInteger(number)) {
        throw new Error('Invaild Amount');
    }
};