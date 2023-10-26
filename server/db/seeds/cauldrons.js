/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cauldrons').del()
  await knex('cauldrons').insert([
    {
      cauldrons_id: 1,
      cauldrons_name: 'Jatin',
      cauldrons_image_url: 'rowValue2',
      cauldrons_description: 'rowValue3',
    },
    {
      cauldrons_id: 2,
      cauldrons_name: 'David',
      cauldrons_image_url: 'rowValue2',
      cauldrons_description: 'rowValue3',
    },
    {
      cauldrons_id: 3,
      cauldrons_name: 'Jen',
      cauldrons_image_url: 'rowValue2',
      cauldrons_description: 'rowValue3',
    },
    {
      cauldrons_id: 4,
      cauldrons_name: 'DaviD',
      cauldrons_image_url: 'rowValue2',
      cauldrons_description: 'rowValue3',
    },
  ])
}
