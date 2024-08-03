const { Op } = require("sequelize");

const { Airport } = require("../models/index");

class airportRepository {
  async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({ name, address, cityId });
      return airport;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPK(airportId);
      airport.name = data.name;
      airport.address = data.address;
      airport.cityId = data.airportId;
      await airport.save();
      return airport;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPK(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }

  async getAllAirport(filter) {
    try {
      if (filter.name) {
        const airport = await Airport.findAll({
          where: {
            [Op.startsWith]: filter.name,
          },
        });
      }
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw error;
    }
  }
}
