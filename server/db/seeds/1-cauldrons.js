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
      cauldrons_name: 'Potion Brewer Jatin',
      cauldrons_image_url: '../images/jatincauldron.png',
      cauldrons_description: 'Brewing the only Force potions available in this interstellar quadrant!  Get your Midichlorian booster now from Jedi Jatin!',
    },
    {
      cauldrons_id: 2,
      cauldrons_name: 'Potion Brewer David',
      cauldrons_image_url: '../images/Davidcauldron.png',
      cauldrons_description: 'Brewing the best enhancement potions available!  Get yours from the Board Game Guru David today!',
    },
    {
      cauldrons_id: 3,
      cauldrons_name: 'Potion Brewer Jen',
      cauldrons_image_url: '../images/jencauldron.png',
      cauldrons_description: 'Brewing the slinkiest of stealth and pur postions available!  Visit Cat Whisperer Jen for all your Feline potions!',
    },
    {
      cauldrons_id: 4,
      cauldrons_name: 'Potion Brewer DaviD',
      cauldrons_image_url: '../images/Daveedcauldron.png',
      cauldrons_description: 'Brewing the finest elemental potions!  Get yours now from the Last Airbender!',
    },
  ])
}
