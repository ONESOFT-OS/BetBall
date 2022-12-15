import api from "../services/api";

interface authResponse {
    token?: boolean,
    type?: string
}

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
        return data.detail;
    } catch (error) {
        return null;
    }
}

export function setTokenLocalStorage(detail: authResponse) {
    localStorage.setItem('authentication', JSON.stringify(detail));
}

export function removeTokenLocalStorage() {
    localStorage.removeItem('authentication');
}

export function getTokenLocalStorage() {
    const response = localStorage.getItem('authentication');
    if (!response) {
        return null;
    }
    return JSON.parse(response);
}
