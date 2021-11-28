const { gql } = require('apollo-server');

const appointmentTypeDefs = gql(`

    type Appointment{
        id: String!
        date: String!
        medicine: [String!]!
    }

    input AppointmentInput {
        date: String!
        medicine: [String!]!
    }

    type Query {
        appointmentById(id: String!): Appointment
        appointmentByUser(user: String!): [Appointment]
    }

    type Mutation {
        createAppointment(appointment: AppointmentInput!): Appointment!
    }
`)

module.exports = appointmentTypeDefs;
