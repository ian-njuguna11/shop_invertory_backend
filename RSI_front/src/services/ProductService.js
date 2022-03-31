import axios from "axios";

const SHOP_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getProducts(){
        return axios.get(SHOP_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(SHOP_API_BASE_URL, product);
    }

    getProductById(productId){
        return axios.get(SHOP_API_BASE_URL + '/' + productId);
    }

    updateProduct(product, productId){
        return axios.put(SHOP_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(SHOP_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService();