import { usersApi } from './connecting'

export const getUserById = async (id) => {
    const { data } = await usersApi.get(id)
    return data;
    // console.log(data);
}
export const getAllUsers = async () => {
    const { data: { users } } = await usersApi.get('add');
    return users;
}
export const deleteUser = async (id) => {
    const { data } = await usersApi.delete(id);
    return data;
}
export const addUser = async ({ cash, cretit } = {}) => {
    const { data } = await usersApi.post('/add', { cash, cretit })
    return data
}