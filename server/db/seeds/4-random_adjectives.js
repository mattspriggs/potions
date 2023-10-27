/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('random_adjectives').del()
  await knex('random_adjectives').insert([
    { randoms_name: ['Forceful','Interstellar', 'Galactic', 'Rebel'], randoms_cauldron_id: 1, randoms_image_url: 'rowValue3' },
    { randoms_name: ['Tactical', 'Strategic', 'Calculating', 'Grandmaster'], randoms_cauldron_id: 2, randoms_image_url: 'rowValue3'},
    { randoms_name: ['Pouncing', 'Playful', 'Stretching', 'Sneaky'], randoms_cauldron_id: 3, randoms_image_url: 'rowValue3'},
    { randoms_name: ['Avartic', 'Harmonizing', 'Masterful', 'Balancing'], randoms_cauldron_id: 4, randoms_image_url: 'rowValue3'},
  ])
}
