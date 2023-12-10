import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.uuid("id").primary();
    table.string("plate").nullable();
    table.string("manufacture").nullable();
    table.string("model").nullable();
    table.string("image").nullable();
    table.integer("rentPerDay").nullable();
    table.integer("capacity").nullable();
    table.text("description").nullable();
    table.dateTime("availableAt").nullable();
    table.string("transmission").nullable();
    table.boolean("available").notNullable().defaultTo(true);
    table.string("type").nullable();
    table.integer("year").nullable();

    // Driver Type
    table
      .enum("driverType", ["dengan sopir", "tanpa sopir (lepas kunci)"])
      .nullable();

    // Options and Specs
    table.specificType("options", "text[]").nullable();
    table.specificType("specs", "text[]").nullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("cars");
}
