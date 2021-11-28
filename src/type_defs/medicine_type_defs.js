const { gql } = require('apollo-server');

const medicineTypeDefs = gql(`
    type Medicine {
        name: String!
        quantity: Int!
        indications: String!
    }

    type Query {
        medicineById(id: String!): Medicine
        medicineByName(name: String!): Medicine
    }

    type Mutation {
        updateMedicine(medicine: Medicine): Medicine
        createMedicine(medicine: Medicien): Medicine
    }
`)

module.exports = medicineTypeDefs;
