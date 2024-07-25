const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity() {}

  async getCity() {}
}

module.exports = CityRepository;
