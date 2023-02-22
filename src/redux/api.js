import axios from "axios";

export const token = import.meta.env.VITE_TOKEN;
// console.log("ini token" + import.meta.env.VITE_TOKEN);

export const getAllUser = async () => {
    const response = await axios.get("https://gorest.co.in/public/v2/users");
    return response;
};

export const getUserById = async ({ id, token }) => {
    const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}

export const createUsers = async (user) => {
    const response = await axios.post("https://gorest.co.in/public/v2/users/", user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
};