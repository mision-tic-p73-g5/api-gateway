const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AppointmentAPI = require('./dataSources/appointment_api');
const AuthAPI = require('./dataSources/auth_api');
const MedicineAPI = require('./dataSources/medicine_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        appointmentAPI: new AppointmentAPI(),
        authAPI: new AuthAPI(),
        medicineAPI: new MedicineAPI(),
    }),
    introspection: true,
    playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}).catch((err) => {
    console.log(err);
});
