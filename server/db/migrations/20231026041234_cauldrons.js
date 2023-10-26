/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('cauldrons', (table) => {
    table.increments('cauldron_id').primary()
    table.string('cauldron_name')
    table.string('cauldron_image_url')
    table.string('cauldron_description')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('cauldrons')
}
