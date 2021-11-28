const medicineResolver = {
    Query: {
        medicineById: async (_, { medicineId }, { dataSources }) => {
            return await dataSources.medicineAPI.medicineById(medicineId);
        },

        medicineByName: async (_, { medicineName }, { dataSources }) => {
            return await dataSources.medicineByName(medicineName);
        },
    },
    Mutation: {
        updateMedicine: async (_, { medicine }, { dataSources }) => {
            return await dataSources.updateMedicine(medicine);
        },
        createMedicine: async (_, { medicine }, { dataSources }) => {
            return await dataSources.createMedicine(medicine);
        }
    }
};

module.exports = medicineResolver;
