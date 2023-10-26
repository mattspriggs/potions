/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('methods').del()
  await knex('methods').insert([
    { methods_name: ['Force push', 'Force pull','Light saber swirl', 'Blaster boil'], methods_cauldron_id: 1 },
    { methods_name: ['Mysterium myster crush', 'Settlers of Catan mince', 'Carcassonne land grab', '7Wonders civil unity'], methods_cauldron_id: 2 },
    { methods_name: ['Claw shred', 'Hissing swirl', 'Purring vibrational crush', 'Arched spine hair raising'], methods_cauldron_id: 3 },
    { methods_name: ['Firebending fry', 'Waterbending whirl','Earthbending shake', 'Metalbending mince'], methods_cauldron_id: 4 },
  ])
}
