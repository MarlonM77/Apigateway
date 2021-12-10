const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class ProductAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.product_api_url;
    }

    async createProduct(product){
        product = new Object(JSON.parse(JSON.stringify(product)));
        return await this.post('/product/', product);
    }

    async getCatalogo(){
        return await this.get('/products/catalogo/');
    }

    async getProduct(productId){
        return await this.get(`/product/${productId}/`);
    }

    async updateProduct(product){
        product = new Object(JSON.parse(JSON.stringify(product)));
        let productId = product.id;
        return await this.put(`/product/update/${productId}/`, product);
    }

    async deleteProduct(productId){
        return await this.delete(`/product/delete/${productId}/`);
    }

    async getLatestProducts(){
        return await this.get('/products/latest/');
    }

    async getProductsCategory(productType){
        return await this.get(`/products/${productType}/`);
    }

}

module.exports = ProductAPI;