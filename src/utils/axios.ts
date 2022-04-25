import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:8080/api/resume' })

export const request = ({ ...options }) => {
    const onSuccess = (response: any) => response
    const onError = (error: any) => error
    return client(options).then(onSuccess).catch(onError)
}