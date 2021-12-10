const { gql } = require('apollo-server');

const authTypes = gql `
    type Tokens {
        refresh:String! 
        access:String!
    }

    type Acces {
        access:String!
    }

    input CredentialsInput {
        username:String!
        password:String!
    }

    input SignUpInput {
        username:String!
        password:String!
        name:String!
        email:String!
        phone:String!
    }

    type UserDetail {
        id:Int!
        username:String!
        password:String!
        name:String!
        email:String!
    }
    
    input UserUpdate {
        id:Int!
        password:String!
        name:String!
        email:String!
    }

    type Query {
        userDetailById(userId:Int!):UserDetail!
    }

    type Mutation {
        signUpUser(userInput:SignUpInput):Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(token:String!):Acces!
        updateUser(user:UserUpdate):UserDetail!
        deleteUser(userId:String!): String!
    }
`;

module.exports = authTypes;