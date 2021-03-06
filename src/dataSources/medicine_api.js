const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require("../server");

class MedicineAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = serverConfig.medicine_api_url;
    }
    
    async medicineById(id) {
        return await this.get(`/medicamento/${id}`);
    }
    
    async medicineByName(medicineName) {
        return await this.get(`/medicamento/byname/${medicineName}`);
    }

    async createMedicine(medicine) {
        medicine = new Object(JSON.parse(JSON.stringify(medicine)));
        return await this.post(`/medicamento`, medicine);
    }

    async updateMedicine(medicine) {
        medicine = new Object(JSON.parse(JSON.stringify(medicine)));
        return await this.post(`/medicamento/update`, medicine);
    }
}

module.exports = MedicineAPI;
