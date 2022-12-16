import axios from "axios";

const USER_API_URL = 'http://localhost:4000/users'
const BASE_API_URL = 'http://localhost:4000'

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

export const deleteUser = async (uid) => {
    const response = await api.delete(`${USER_API_URL}/${uid}`)
    const status = response.data
    return uid
}

export const login = async (user) => {
    try {
        const response = await api.post(`${BASE_API_URL}/login`, user)
        return response.data
    } catch(e) {
        alert('Incorrect username or password, please try again.')
    }
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
    const response = await axios.get(USER_API_URL)
    return response.data
}

export const updateUser = async (uid, userUpdates) => {
    const response = await api.put(`USER_API_URL/${uid}`, userUpdates)
    return userUpdates
}

