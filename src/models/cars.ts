import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id!: string;
  plate!: string;
  manufacture?: string;
  model?: string;
  image?: string;
  rentPerDay?: number;
  capacity?: number;
  description?: string;
  availableAt?: Date;
  transmission?: string;
  available!: boolean;
  type?: string;
  year?: number;
  driverType!: "dengan sopir" | "tanpa sopir (lepas kunci)";
  options?: string[];
  specs?: string[];

  static get tableName() {
    return "cars";
  }
}

export type Cars = ModelObject<CarsModel>;
