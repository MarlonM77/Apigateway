const productResolver = {
    Query: {
        productById: async(_, {productId}, {dataSources}) => {
            return await dataSources.productAPI.getProduct(productId);
        },

        productByType: async(_, {productType}, {dataSources}) => {

            if(productType == "DAMA"){
                productType = 'Dama';
                return await dataSources.productAPI.getProductsCategory(productType);

            }else if(productType == "CABALLERO"){
                productType = 'caballero';
                return await dataSources.productAPI.getProductsCategory(productType);

            }else if(productType == "NIÑO"){
                productType = 'niño';
                return await dataSources.productAPI.getProductsCategory(productType);

            }else if(productType == "NIÑA"){
                productType = 'niña';
                return await dataSources.productAPI.getProductsCategory(productType);

            }else if(productType == "latest"){
                return await dataSources.productAPI.getLatestProducts();

            }else if(productType == "catalogo"){
                return await dataSources.productAPI.getCatalogo();

            }else{
                return null;
            }
        }
    },
    Mutation: {
        createProduct: async(_, {product}, {dataSources}) => {
            return await dataSources.productAPI.createProduct(product);
        },

        updateProduct: async(_, {product}, {dataSources}) => {
            return await dataSources.productAPI.updateProduct(product);
        }
    }
};

module.exports = productResolver;