/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {
      ingredients_id: 1,
      ingredients_name: 'rowValue1',
      ingredients_description: 'rowValue2',
      ingredients_image_url: 'rowValue3',
    },
    {
      ingredients_id: 2,
      ingredients_name: 'rowValue1',
      ingredients_description: 'rowValue2',
      ingredients_image_url: 'rowValue3',
    },
    {
      ingredients_id: 3,
      ingredients_name: 'rowValue1',
      ingredients_description: 'rowValue2',
      ingredients_image_url: 'rowValue3',
    },
  ])
}
