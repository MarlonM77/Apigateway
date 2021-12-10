const userResolver = {
    Query: {
        userDetailById: async(_, {userId}, {dataSources, userIdToken}) => {
            if(userId == userIdToken){
                return await dataSources.authAPI.getUser(userId);            
            }else {
                return null;
            }
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, {dataSources}) => {
            const authInput = {
                username    : userInput.username,  
                password    : userInput.password,
                name        : userInput.name,
                email       : userInput.email,
                phone       : userInput.phone
            }
            return await dataSources.authAPI.createUser(authInput);
        },

        logIn: async (_, {credentials}, {dataSources}) => {
            return await dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: (_, {token},{dataSources}) => {
            dataSources.authAPI.refreshToken(token);
        },

        updateUser: async (_, {user}, {dataSources, userIdToken}) => {
            if(user.id == userIdToken){
                return await dataSources.authAPI.updateUser(user);

            }else{
                return null;
            }
        },

        deleteUser: async (_, {userId},{dataSources, userIdToken}) => {
            if(userId == userIdToken){
                return await dataSources.authAPI.deleteUser(userId);
                
            }else{
                return null;
            }
        },
    }
};

module.exports = userResolver;