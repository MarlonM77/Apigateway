const { gql } = require('apollo-server');

const productTypes = gql `
    type Product {
        id:Int!
        productName:String!
        productType:String!
        productSize:String!
        productPrice:Float!
        productAmount:Int!
        description:String!
        productImg:String!
        thumbnail:String!
        dateAdded:String!
    }

    type ProductDetail {
        id:Int!
        productName:String!
        productType:String!
        productSize:String!
        productPrice:Float!
        productAmount:Int!
        description:String!
        productImg:String!
        dateAdded:String!
    }

    input ProductInput {
        productName:String!
        productType:String!
        productSize:String!
        productPrice:Float!
        productAmount:Int!
        description:String!
        productImg:String!
    }

    input ProductInputUpdate {
        id:Int!
        productName:String!
        productType:String!
        productSize:String!
        productPrice:Float!
        productAmount:Int!
        description:String!
        productImg:String!
    }

    type Query {
        productById(productId:Int!):ProductDetail!
        productByType(productType:String!):[Product]
    }

    type Mutation {
        createProduct(product:ProductInput!):Product
        updateProduct(product:ProductInputUpdate!):Product
    }
`;

module.exports = productTypes;