const appointmentTypeDefs = require("./appointment_type_defs");
const authTypeDefs = require("./auth_type_defs");
const medicineTypeDefs = require("./medicine_type_defs");

const schemasArrays = [authTypeDefs, medicineTypeDefs, appointmentTypeDefs];

module.exports = schemasArrays;
