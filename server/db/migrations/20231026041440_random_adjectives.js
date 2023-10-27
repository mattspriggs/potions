/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('random_adjectives', (table) => {
    table.string('randoms_name')
    table.integer('randoms_cauldron_id')
    table.string('randoms_image_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('random_adjectives')
}
