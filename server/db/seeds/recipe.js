/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipe').del()
  await knex('recipe').insert([
    {
      id: 1,
      recipe_cauldron_id: 'rowValue1',
      recipe_ingredients_id: 'rowValue1',
      recipe_ingredients_qty: 'rowValue1',
    },
    {
      id: 2,
      recipe_cauldron_id: 'rowValue1',
      recipe_ingredients_id: 'rowValue1',
      recipe_ingredients_qty: 'rowValue1',
    },
    {
      id: 3,
      recipe_cauldron_id: 'rowValue1',
      recipe_ingredients_id: 'rowValue1',
      recipe_ingredients_qty: 'rowValue1',
    },
  ])
}
