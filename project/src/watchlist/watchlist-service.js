import axios from "axios";

const USERS_URL = 'http://localhost:4000/users'

const api = axios.create({withCredentials: true})

export const userWatchesPosting = async (pid) => {
    const response = await api.post(`${USERS_URL}/watches/${pid}`)
    return response.data
}

export const findPostingsWatchedByUser = async (uid) => {
    const response = await api.get(`${USERS_URL}/${uid}/watchings`)
    return response.data
}