const USER = 'USER';

export function getTokenFromLocalStorage() {
    const userToken = localStorage.getItem(USER);
    if(!userToken) return '';
    return userToken;
}

export function putTokenInLocalStorage(token) {
    localStorage.setItem(USER, token)
}