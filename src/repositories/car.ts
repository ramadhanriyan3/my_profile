import { CarsModel } from "../models/cars";
import { Request } from "express";

export default class CarRepositories {
  async getAll() {
    return await CarsModel.query();
  }

  async getById(req: Request) {
    const getId = req.params.id;
    return await CarsModel.query().where("id", getId);
  }

  async deleteCar(req: Request) {
    const getId = req.params.id;
    return await CarsModel.query().where("id", getId).del();
  }

  async postCar(item: any) {
    return await CarsModel.query().insert(item).returning("*");
  }

  async updateCar(req: Request, item: any) {
    const getId = req.params.id;
    return await CarsModel.query().where("id", "=", getId).update(item);
  }
}
