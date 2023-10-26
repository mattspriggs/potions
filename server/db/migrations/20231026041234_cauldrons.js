/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('cauldrons', (table) => {
    table.increments('cauldrons_id').primary()
    table.string('cauldrons_name')
    table.string('cauldrons_image_url')
    table.string('cauldrons_description')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('cauldrons')
}
