import axios from "axios";

// ✅ ใช้ baseURL จาก .env
// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// ✅ ใช้ baseURL แบบ relative เพื่อให้ proxy ใน Vite ทำงาน
const api = axios.create({
    baseURL: "/api",
});

// ✅ เพิ่ม interceptor ใส่ token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    //console.log("Attaching token to request:", token); // Debug log
    if (token) {
        // config.headers.Authorization = `Bearer ${token}`;
        if (config.headers && typeof config.headers.set === 'function') {
            config.headers.set('Authorization', `Bearer ${token}`);
        } else {
            config.headers = config.headers || {};
            (config.headers as any).Authorization = `Bearer ${token}`;
        }
    }
    return config;
});


export default api;