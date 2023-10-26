/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cauldrons').del()
  await knex('cauldrons').insert([
    {
      cauldron_id: 1,
      cauldron_name: 'Jatin',
      cauldron_image_url: 'rowValue2',
      cauldron_description: 'rowValue3',
    },
    {
      cauldron_id: 2,
      cauldron_name: 'David',
      cauldron_image_url: 'rowValue2',
      cauldron_description: 'rowValue3',
    },
    {
      cauldron_id: 3,
      cauldron_name: 'Jen',
      cauldron_image_url: 'rowValue2',
      cauldron_description: 'rowValue3',
    },
    {
      cauldron_id: 4,
      cauldron_name: 'DaviD',
      cauldron_image_url: 'rowValue2',
      cauldron_description: 'rowValue3',
    },
  ])
}
