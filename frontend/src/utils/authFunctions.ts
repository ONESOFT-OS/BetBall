import api from "../services/api";

export async function loginRequestToken(email: string, senha: string) {
    try {
        const auth = await api.post('/auth/login', {
            email,
            senha,
        });
        return auth.data.access_token;
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
