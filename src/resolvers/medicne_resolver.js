const medicineResolver = {
    Query: {
        medicineById: async (_, { id }, { dataSources }) => {
            return await dataSources.medicineAPI.medicineById(id);
        },

        medicineByName: async (_, { medicineName }, { dataSources }) => {
            return await dataSources.medicineAPI.medicineByName(medicineName);
        },
    },
    Mutation: {
        updateMedicine: async (_, { medicine }, { dataSources }) => {
            return await dataSources.medicineAPI.updateMedicine(medicine);
        },
        createMedicine: async (_, { medicine }, { dataSources }) => {
            return await dataSources.medicineAPI.createMedicine(medicine);
        }
    }
};

module.exports = medicineResolver;
