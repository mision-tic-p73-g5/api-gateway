const lodash = require('lodash');

const medicineResolver = require('./medicne_resolver');
const appointmentResolver = require('./appointment_resolver');
const authResolver = require('./auth_resolver');

const resolvers = lodash.merge(authResolver, medicineResolver, appointmentResolver);

module.exports = resolvers;
