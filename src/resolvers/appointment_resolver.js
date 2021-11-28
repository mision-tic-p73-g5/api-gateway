const appointmentResolver = {
    Query: {
        appointmentById: async (_, { appointmentId }, { dataSources }) => { 
            return await dataSources.appointmentById(appointmentId);
        },
        appointmentByUser: async (_, { username }, { dataSources }) => {
            return await dataSources.appointmentByUser(username);
        },
    },
    Mutation: {
        createAppointment: async (_, { appointment }, { dataSources }) => {
            return await dataSources.createAppointment(appointment);
        }
    }
};

module.exports = appointmentResolver;
