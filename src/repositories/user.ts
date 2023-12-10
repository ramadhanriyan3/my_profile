import { UsersModel } from "../models/users";

export default class User {
  // register
  async postUser(userData: any) {
    return await UsersModel.query().insert(userData).returning("*");
  }

  async getUser(email: any) {
    return await UsersModel.query().findOne(email);
  }
}
