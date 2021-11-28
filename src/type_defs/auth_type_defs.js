const { gql } = require('apollo-server');

const authTypeDefs = gql(`
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        identify: String!
        password: String!
    }

    input SignUpInput {
        identify: String!
        password: String!
        name:String!
        email: String!
        mobile: String!
        direction: String!
        city: String!
        role: String!
    }

    type UserDetail {
        id: Int!
        identify: String!
        name:String!
        email: String!
        mobile: String!
        direction: String!
        city: String!
        role: String!
    }

    type Mutation {
        singUpUser(userInput: SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refrestoken(refresh: String!): Access!
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`);

module.authTypeDefs;
