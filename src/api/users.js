import { axios } from '../utils/libraries.js';

export async function getUser(id) {
    const { data: { data: user } } = await axios.get(`/users/${id}`);
    return user;
}