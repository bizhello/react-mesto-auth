const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
}

export const registerAuth = (login, password) => {

    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password" : `${password}`,
            "email" : `${login}`,
        })
    })
        .then(checkResponse)
};

export const loginAuth = (login, password) => {

    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password" : `${password}`,
            "email" : `${login}`,
        })
    })
        .then(checkResponse)
};

export const getContentAuth = (token) => {

    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
    })
        .then(checkResponse)
        .catch((err) => console.log(err));
}


