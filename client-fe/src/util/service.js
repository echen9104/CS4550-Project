import axios from 'axios'
import querystring from 'querystring'
import { message } from 'antd'

function camelCase(str) {
    let reg = /^\d{4}-\d{2}/
    if (reg.test(str)) return str
    let rdashAlpha = /-([a-z]|[0-9])/gi
    let rmsPrefix = /^-ms-/
    let fcamelCase = function (all, letter) {
        return (letter + '').toUpperCase()
    }
    return str.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase)
}

function changeHump(data) {
    let result = {}
    if (Array.isArray(data)) {
        result = []
    }
    for (var key in data) {
        let value = data[key]
        key = key.replace(/_/g, '-')
        key = camelCase(key)
        if (value instanceof Object) {
            value = changeHump(value)
        }
        result[key] = value
    }
    return result
}

axios.defaults.timeout = 30000
axios.defaults.baseUrl = ''
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.request.use(function (config) {
    config.headers['jwt'] = localStorage.getItem('lowcode_token')
    return config
})

axios.interceptors.response.use(
    function (res) {
        let data = res.data
        let code = data.code
        if (typeof data === 'string') {
            data = JSON.parse(data)
        }
        if (code == 0 || isNaN(code)) {
            const res = changeHump(data)
            return res.data
        } else {
            if (code == 401) {
                window.location.href = '/login'
                return Promise.reject(data)
            }
            return Promise.reject(data)
        }
    },
    function (error) {
        const [messageApi] = message.useMessage()
        let response = error.response
        let data = response.data
        if (response.config.headers && response.config.headers['custom-reject']) {
            return Promise.reject(data)
        }
        let status = error.response.status
        if (status === 401) {
            let url = window.location.href
            window.location.href = '/login'
            return Promise.reject(error)
        }
        messageApi.open({
            type: 'error',
            content: `${response.config.url}: ${error.message}`
        })
        return Promise.reject(error)
    }
)

/**
 * Send post Request
 *
 * @param {string} url
 * @param {Object} data
 * @return {Promise}
 */
export function post(url, data = {}) {
    return axios.post(url, querystring.stringify(data))
}

export async function postWithJson(url, data = {}, options = {}) {
    return axios.post(url, data, options)
}

/**
 * post form
 *
 * @param {string} url
 * @param {Object} data
 * @return {Promise}
 */
export function form(url, data = {}) {
    return axios.post(url, querystring.stringify(data), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}

/**
 *  delete request
 *
 * @param {string} url
 * @param {Object} data
 * @return {Promise}
 */
export function del(url, data = {}) {
    return axios.delete(url, {
        params: data,
    })
}

/**
 * get request
 *
 * @param {string} url
 * @param {Object} data
 * @return {Promise}
 */
export function get(url, data = {}) {
    return axios.get(url, {
        params: data,
    })
}

/**
 * update request
 *
 * @param {string} url
 * @param {Object} data
 * @return {Promise}
 */
export function put(url, data = {}) {
    return axios.put(url, data)
}
