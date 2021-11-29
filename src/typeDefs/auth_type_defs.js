const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        identification_number: String!
        password: String!
    }
    input SignUpInput {
        identification_number: String!
        password: String!
        name: String!
        email: String!
        mobile: String!
        direction: String!
        city: String!
        role: String!
    }
    type UserDetail {
        id: Int!
        identification_number: String!
        name: String!
        email: String!
        mobile: String!
        direction: String!
        city: String!
        role: String!
    }
    type Mutation {
        signUpUser(userInput: SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens
        refreshToken(refresh: String!): Access!
    }
    type Query {
        userDetailById(userId: Int!): UserDetail!
    }

`;

module.exports = authTypeDefs;
