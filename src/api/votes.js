import { axios } from '../utils/libraries.js';

export async function getVote(id) {
    const { data: { data: vote } } = await axios.get(`/votes/${id}`);
    return vote;
}

export async function createVote(vote) {
    const { data: { data: error } } = await axios.post(`/votes`, { vote: vote });
    if (error)
        throw error;
}

export async function reactVote(id, option) {
    const { data: { data: error } } = await axios.put(`/votes/${id}`, { option: option });
    if (error)
        throw error;
}
