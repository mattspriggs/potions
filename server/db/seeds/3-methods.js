/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('methods').del()
  await knex('methods').insert([
    { methods_name: 'Force push', methods_cauldron_id: 1 },
    { methods_name: 'Force pull', methods_cauldron_id: 1 },
    { methods_name: 'Light saber swirl', methods_cauldron_id: 1 },
    { methods_name: 'Blaster boil', methods_cauldron_id: 1 },
    { methods_name: 'Mysterium myster crush', methods_cauldron_id: 2 },
    { methods_name: 'Settlers of Catan mince', methods_cauldron_id: 2 },
    { methods_name: 'Carcassonne land grab', methods_cauldron_id: 2 },
    { methods_name: '7Wonders civil unity', methods_cauldron_id: 2 },
    
    { methods_name: 'Claw shred', methods_cauldron_id: 3 },
    { methods_name: 'Hissing swirl', methods_cauldron_id: 3 },
    { methods_name: 'Purring vibrational crush', methods_cauldron_id: 3 },
    { methods_name: 'Arched spine hair raising', methods_cauldron_id: 3 },

    { methods_name: 'Firebending fry', methods_cauldron_id: 4 },
    { methods_name: 'Waterbending whirl', methods_cauldron_id: 4 },
    { methods_name: 'Earthbending shake', methods_cauldron_id: 4 },
    { methods_name: 'Metalbending mince', methods_cauldron_id: 4 },
  ])
}
