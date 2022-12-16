import axios from "axios";

const POSTING_API_URL = 'http://localhost:4000/postings'
const USER_POSTINGS_API_URL = 'http://localhost:4000/users'

const api = axios.create({withCredentials: true});

export const createPosting = async (post) => {
    const response = await api.post(POSTING_API_URL, post)
    return response.data
}

export const findPostingsByUser = async (uid) => {
    const response = await api.get(`${USER_POSTINGS_API_URL}/${uid}/postings`)
    return response.data
}

export const findPostingsBySku = async (sku) => {
    const response = await api.get(`${POSTING_API_URL}/${sku}`)
    return response.data
}
