/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('methods').del()
  await knex('methods').insert([
    { id: 1, methods_name: 'rowValue1', methods_cauldron_id: 'rowValue2' },
    { id: 2, methods_name: 'rowValue1', methods_cauldron_id: 'rowValue2' },
    { id: 3, methosd_name: 'rowValue1', methods_cauldron_id: 'rowValue2' },
  ])
}
