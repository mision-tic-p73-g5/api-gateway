const { gql } = require('apollo-server');

const appointmentTypeDefs = gql `
    
    type Appointment{
        id: String!
        user: String!
        date: String!
        medicine: String!
    }
    input AppointmentInput {
        user: String!
        date: String!
        medicine: String!
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
