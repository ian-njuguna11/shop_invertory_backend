// 

import axios from "axios";

const SHOP_API_CHART_ANALYSIS = "http://127.0.0.1:8080/api/v1/annual_report";

class ChartsService {

    getChart(){
        return axios.get(SHOP_API_CHART_ANALYSIS);
    }

    createChart(product){
        return axios.post(SHOP_API_CHART_ANALYSIS, product);
    }

    updateChart(product, productId){
        return axios.put(SHOP_API_CHART_ANALYSIS + '/' + productId, product);
    }

    deleteChart(productId){
        return axios.delete(SHOP_API_CHART_ANALYSIS + '/' + productId);
    }
}

export default new ChartsService();