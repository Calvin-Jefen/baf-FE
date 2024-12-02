//service for login
import axios from "axios";
const API_LOGIN = 'http://159.223.48.190:8080/api/v1/auth/login'

export const login = async (email, password) => {
    try {
        const response = await axios.post(API_LOGIN, {
            Email:email, 
            Password: password
        });
        console.log("response login: ",response.data)
        return response.data;
    } catch (error) {
        console.log("error login: ",error);
        
        throw error;
    }
}

