/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('recipe', (table) => {
    table.integer('recipe_cauldron_id')
    table.integer('recipe_ingredients_id')
    table.integer('recipe_ingredients_qty')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('recipe')
}
