const lodash = require('lodash');

const medicineResolver = require('./medicne_resolver');
const appointmentResolver = require('./appointment_resolver');
const auth_resolver = require('./auth_resolver');

const resolvers = lodash.merge(medicineResolver, appointmentResolver, authResolver);

module.exports = resolvers;
