const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class AppointmentAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.medicine_api_url;
    }

    async appointmentById(id) {
        return await this.get(`/cita/${id}`);
    }

    async appointmentByUser(user) {
        return await this.get(`/cita/${user}`);
    }

    async createAppointment(appointment) {
        appointment = new Object(JSON.parse(JSON.stringify(appointment)));
        return await this.post('/cita', appointment);
    }

}

module.exports = AppointmentAPI;
