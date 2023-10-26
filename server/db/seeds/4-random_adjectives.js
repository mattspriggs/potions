/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('random_adjectives').del()
  await knex('random_adjectives').insert([
    { id: 1, randoms_name: 'rowValue1', randoms_cauldron_id: 'rowValue2', randoms_image_url: 'rowValue3' },
    { id: 2, randoms_name: 'rowValue1', randoms_cauldron_id: 'rowValue2', randoms_image_url: 'rowValue3'},
    { id: 3, randoms_name: 'rowValue1', randoms_cauldron_id: 'rowValue2', randoms_image_url: 'rowValue3'},
  ])
}
