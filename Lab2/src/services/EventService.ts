import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://my-json-server.typicode.com/saran1185a/databaseForLab2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getEvents(perPage: Number, page: Number) {
        return apiClient.get('/events?_limit='+ perPage + '&_page='+ page)
    },
    getEvent (id: number){
        return apiClient.get('/events/' + id)
    }
}