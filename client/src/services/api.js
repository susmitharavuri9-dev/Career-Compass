import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            if (!window.location.pathname === "/" && !window.location.pathname === "/register") {
                window.location.href = "/";
            }
        }
        return Promise.reject(error);
    }
);

export const authHelpers = {
    setAuth: (token, user) => {
        localStorage.setItem("token", token);
        if (user) localStorage.setItem("user", JSON.stringify(user));
    },
    clearAuth: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },
    getUser: () => {
        const u = localStorage.getItem("user");
        return u ? JSON.parse(u) : null;
    },
    isAuthenticated: () => !!localStorage.getItem("token"),
};

export default API;