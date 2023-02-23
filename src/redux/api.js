import axios from "axios";

export const token = import.meta.env.VITE_TOKEN;
// console.log("ini token" + import.meta.env.VITE_TOKEN);

export const getAllUser = async () => {
    const response = await axios.get("https://gorest.co.in/public/v2/users");
    return response;
};

export const getUserById = async (id) => {
    const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}

export const createUsers = async (user) => {
    await axios.post("https://gorest.co.in/public/v2/users/", user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            alert("User Berhasil Dibuat")
            return response
        })
        .catch(error => {
            // console.log(error.response.data.error)
            alert("Cek Kembali Data Yang Diisi")
            // return error
        })
};

export const updateUsers = async (id, user) => {
    const response = await axios.put(`https://gorest.co.in/public/v2/users/${id}`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

export const deleteUsers = async (id) => {
    const response = await axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}