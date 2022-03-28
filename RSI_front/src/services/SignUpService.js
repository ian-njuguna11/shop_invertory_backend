import axios from "axios";

const SHOP_API_BASE_URL_REG = "http://localhost:8080/api/v1/auth";

class SignUpService{
    createUser(user){
        return axios.post(SHOP_API_BASE_URL_REG, user);
    }
}

export default new SignUpService();