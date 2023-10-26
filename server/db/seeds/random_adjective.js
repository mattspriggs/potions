/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('random_adjective').del()
  await knex('random_adjective').insert([
    { id: 1, random_name: 'rowValue1', random_cauldron_id: 'rowValue1' },
    { id: 2, random_name: 'rowValue1', random_cauldron_id: 'rowValue1' },
    { id: 3, random_name: 'rowValue1', random_cauldron_id: 'rowValue1' },
  ])
}
