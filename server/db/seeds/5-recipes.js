/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {
      id: 1,
      recipes_cauldrons_id: 'rowValue1',
      recipes_ingredients_id: 'rowValue2',
      recipes_ingredients_qty: 'rowValue3',
    },
    {
      id: 2,
      recipes_cauldrons_id: 'rowValue1',
      recipes_ingredients_id: 'rowValue2',
      recipes_ingredients_qty: 'rowValue3',
    },
    {
      id: 3,
      recipes_cauldrons_id: 'rowValue1',
      recipes_ingredients_id: 'rowValue2',
      recipes_ingredients_qty: 'rowValue3',
    },
  ])
}
