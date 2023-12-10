import * as path from "path";
import * as fs from "fs";
import { Knex } from "knex";

exports.seed = async function (knex: Knex): Promise<void> {
  await knex("cars").del();

  const filePath = path.join(__dirname, "./../src/models/carsData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const carsData = JSON.parse(jsonData);

  await knex("cars").insert(
    carsData.map((car: any) => ({
      id: car.id,
      plate: car.plate,
      manufacture: car.manufacture,
      model: car.model,
      image: car.image,
      rentPerDay: car.rentPerDay,
      capacity: car.capacity,
      description: car.description,
      availableAt: new Date(car.availableAt),
      transmission: car.transmission,
      available: car.available,
      type: car.type,
      year: car.year,
      driverType: car.driverType,
      options: car.options,
      specs: car.specs,
    }))
  );
};
