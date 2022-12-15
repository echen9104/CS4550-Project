import axios from "axios";

const USER_API_URL = 'localhost:4000/users'
// const USER_API_URL = 'mongodb+srv://cs4550:project@postings.u9fsees.mongodb.net/users?retryWrites=true&w=majority'
const BASE_API_URL = 'mongodb+srv://cs4550:project@postings.u9fsees.mongodb.net/?retryWrites=true&w=majority'

const api = axios.create({withCredentials: true});

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API_URL}/${uid}`)
    const user = response.data
    return user
}

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}
export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`)
    return response.data
}

export const findAllUsers = async () => {
    console.log('4')
    const response = await axios.get(USER_API_URL)
    console.log(response.data)
    console.log('3')
    return response.data
}
