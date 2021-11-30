const appointmentResolver = {
    Query: {
        appointmentById: async (_, { id }, { dataSources }) => { 
            return await dataSources.appointmentAPI.appointmentById(id);
        },
        appointmentByUser: async (_, { user }, { dataSources }) => {
            return await dataSources.appointmentAPI.appointmentByUser(user);
        },
    },
    Mutation: {
        createAppointment: async (_, { appointment }, { dataSources }) => {
            return await dataSources.appointmentAPI.createAppointment(appointment);
        }
    }
};

module.exports = appointmentResolver;
