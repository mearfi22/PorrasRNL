import AxiosInstance from "../AxiosInstance";

const GenderServices = {
  storeGender: async () => {
    return AxiosInstance.post("/storeGender")
      .then((response) => {
        response;
      })
      .catch((error) => {
        throw error;
      });
  },
};

export default GenderServices;
