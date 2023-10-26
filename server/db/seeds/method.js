/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('method').del()
  await knex('method').insert([
    { id: 1, method_name: 'rowValue1', method_cauldron_id: 'rowValue1' },
    { id: 2, method_name: 'rowValue1', method_cauldron_id: 'rowValue1' },
    { id: 3, method_name: 'rowValue1', method_cauldron_id: 'rowValue1' },
  ])
}
