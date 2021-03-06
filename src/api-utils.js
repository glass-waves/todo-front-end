import request from "superagent";

const URL = 'https://ancient-oasis-74313.herokuapp.com';


export async function signupUser(email, password) {
    const response = await request.post(`${URL}/auth/signup`).send({email, password});

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request.post(`${URL}/auth/signin`).send({email, password});

    return response.body;
}

export async function getTodoList(token) {
    const response = await request.get(`${URL}/api/todo`).set('Authorization', token);

    return response.body;
}

export async function addTodoItem(todo, token) {
    const response = await request.post(`${URL}/api/todo`).set('Authorization', token).send({ todo });

    return response.body;
}

export async function completeListItem(id, token) {
    const response = await request.put(`${URL}/api/todo/${id}`).set('Authorization', token);

    return response.body;
}