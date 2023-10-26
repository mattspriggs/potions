/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('blender', (table) => {
    table.increments('blender_id').primary()
    table.string('blender_name')
    table.string('blender_image_url')
    table.string('blender_description')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('blender')
}
