const { gql } = require('apollo-server');

const medicineTypeDefs = gql `
    type Medicine {
        id: String!
        name: String!
        quantity: Int!
        indications: String!
    }
    input MedicineInput {
        name: String!
        quantity: Int!
        indications: String!
    }
    input MedicineUpdatedInput {
        id: String!
        name: String!
        quantity: Int!
        indications: String!
    }
    extend type Query {
        medicineById(id: String!): Medicine
        medicineByName(name: String!): Medicine
    }
    extend type Mutation {
        updateMedicine(medicine: MedicineUpdatedInput): Medicine
        createMedicine(medicine: MedicineInput): Medicine
    }
`;

module.exports = medicineTypeDefs;
