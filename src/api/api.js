import * as axios from "axios";

const username = 'fetest';
const password = 'root123456';
let _token;

const instance = axios.create({
    baseURL: 'https://213.184.245.66:5010',
});

const _getPeople = (people) => {
    return people.map((human) => {
        return {
            name: `${human.name} ${human.midname} ${human.surname}`,
            image_ref: human.image_ref
        }
    })
}


export const api = {
    getToken() {
        return instance.get(`/login`, {
            auth: { username, password }
        }).then(response => {
            _token = response.data.access_token;
        })
    },
    getAllPeople() {
        return instance.get(`/api/get_all_people`, {
            headers: {
                Authorization: "Bearer " + _token
            }
        }).then(response => _getPeople(response.data.data.people));
    },
    getImage(image_ref) {
        return instance.get(image_ref, {
            headers: {
                Authorization: "Bearer " + _token,
            },
            responseType: 'arraybuffer'
        }).then((response) => {
            let buffer = Buffer.from(response.data, 'binary').toString('base64')
            return `data:image/bmp;base64,${buffer}`;
        })
    }
}







