import api from "../services/api";
import axios from "axios";

export async function loginRequestToken(email: string, password: string) {
    try {
        var bodyFormData = new FormData();
        bodyFormData.append('username', email);
        bodyFormData.append('password', password);

        const {data} = await api({
            method: 'post',
            url: 'http://127.0.0.1:8000/token',
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        });
        console.log(data);
        return data.detail;
    } catch (error) {
        return null;
    }
}

export function setTokenLocalStorage(token: string | null) {
    localStorage.setItem('user_token', JSON.stringify(token));
}

export function removeTokenLocalStorage() {
    localStorage.removeItem('user_token');
}

export function getTokenLocalStorage() {
    const response = localStorage.getItem('user_token');
    if (!response) {
        return null;
    }
    return JSON.parse(response);
}
