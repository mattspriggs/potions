/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('recipes', (table) => {
    table.integer('recipes_cauldrons_id')
    table.integer('recipes_ingredients_id')
    table.integer('recipes_ingredients_qty')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('recipes')
}
