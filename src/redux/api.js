import axios from "axios";

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