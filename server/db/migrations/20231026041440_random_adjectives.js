/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('random_adjectives', (table) => {
    table.specificType('randoms_name', 'text ARRAY')
    table.integer('randoms_cauldron_id')
    table.specificType('randoms_image_url', 'text ARRAY')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('random_adjectives')
}
