const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId === userIdToken) {
                return dataSources.authAPI.getUser(userId);
            }
            return null;
        },
    },
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
            const authInput = {
                identification_number: userInput.identification_number,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email,
                mobile: userInput.mobile,
                direction: userInput.direction,
                city: userInput.city,
                role: userInput.role,
            }

            return await dataSources.authAPI.signUpUser(authInput);
        },

        logIn: (_, { credentials }, { dataSources }) => {
            dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: (_, { refresh }, { dataSources }) => {
            dataSources.authAPI.refreshToken(refresh);
        }
    }
};

module.exports = usersResolver;
