const { gql } = require('apollo-server');

const appointmentTypeDefs = gql `
   
   type Info {
       id: String!
       quantity: Int!
   }
    type Appointment{
        id: String!
        user: String!
        date: String!
        medicine: [Info!]!
    }
    input InfoInput {
        id: String!
        quantity: Int!
    }
    input AppointmentInput {
        user: String!
        date: String!
        medicine: [InfoInput]!
    }
    extend type Query {
        appointmentById(id: String!): Appointment
        appointmentByUser(user: String!): [Appointment]
    }
    extend type Mutation {
        createAppointment(appointment: AppointmentInput!): Appointment!
    }
`;

module.exports = appointmentTypeDefs;
